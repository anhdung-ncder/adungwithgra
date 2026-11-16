#!/usr/bin/env node
/**
 * Builds a native macOS 1-click `.app` Launcher bundle ("Antigravity Custom Theme.app")
 * that launches Antigravity with CDP port 9000 and injects Custom Theme automatically.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const APP_NAME = 'Antigravity Custom Theme.app';
const DIST_BUNDLE = path.join(ROOT_DIR, 'dist', 'antigravity-theme-injector.js');
const INJECT_SCRIPT = path.join(ROOT_DIR, 'inject.mjs');
const LOG_PATH = path.join(ROOT_DIR, '.launcher.log');
const ANTIGRAVITY_ICON = '/Applications/Antigravity.app/Contents/Resources/icon.icns';

function escapeCString(value) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function buildInfoPlist() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key>
  <string>Antigravity Custom Theme</string>
  <key>CFBundleDisplayName</key>
  <string>Antigravity Custom Theme</string>
  <key>CFBundleIdentifier</key>
  <string>com.antigravity.custom-theme.launcher</string>
  <key>CFBundleVersion</key>
  <string>1.0.0</string>
  <key>CFBundleShortVersionString</key>
  <string>1.0.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleExecutable</key>
  <string>AntigravityCustomTheme</string>
  <key>CFBundleIconFile</key>
  <string>icon.icns</string>
  <key>LSMinimumSystemVersion</key>
  <string>12.0</string>
  <key>LSUIElement</key>
  <true/>
  <key>NSHighResolutionCapable</key>
  <true/>
</dict>
</plist>
`;
}

function buildLauncherCSource({ nodePath, injectScriptPath, logPath }) {
  return `#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <unistd.h>

static const char *find_node(void) {
  const char *candidates[] = {
    "${escapeCString(nodePath)}",
    "/opt/homebrew/bin/node",
    "/usr/local/bin/node",
    "/usr/bin/node",
    NULL
  };
  for (int i = 0; candidates[i] != NULL; i++) {
    if (access(candidates[i], X_OK) == 0) {
      return candidates[i];
    }
  }
  return NULL;
}

static void show_error_dialog(const char *msg) {
  pid_t pid = fork();
  if (pid == 0) {
    char script[1024];
    snprintf(
      script,
      sizeof(script),
      "display alert \\"Antigravity Custom Theme\\" message \\"%s\\" as critical",
      msg
    );
    execl("/usr/bin/osascript", "osascript", "-e", script, (char *)NULL);
    _exit(1);
  }
  if (pid > 0) {
    int status = 0;
    waitpid(pid, &status, 0);
  }
}

int main(void) {
  const char *node_bin = find_node();
  if (node_bin == NULL) {
    show_error_dialog("Khong tim thay Node.js (>= 22) de khoi chay Custom theme.");
    return 1;
  }

  pid_t pid = fork();
  if (pid < 0) {
    show_error_dialog("Khong the tao tien trinh khoi dong Custom theme.");
    return 1;
  }

  if (pid == 0) {
    int log_fd = open("${escapeCString(logPath)}", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    if (log_fd >= 0) {
      dup2(log_fd, STDOUT_FILENO);
      dup2(log_fd, STDERR_FILENO);
      close(log_fd);
    }
    execl(
      node_bin,
      node_bin,
      "${escapeCString(injectScriptPath)}",
      "--launch",
      (char *)NULL
    );
    _exit(127);
  }

  int status = 0;
  if (waitpid(pid, &status, 0) < 0) {
    return 1;
  }
  if (!WIFEXITED(status) || WEXITSTATUS(status) != 0) {
    show_error_dialog("Khong the tiem Custom theme. Xem chi tiet trong .launcher.log.");
    return 1;
  }
  return 0;
}
`;
}

function createBundle(targetAppDir) {
  if (process.platform !== 'darwin') {
    throw new Error('Script tao .app launcher chi ho tro macOS.');
  }
  if (!fs.existsSync(DIST_BUNDLE)) {
    throw new Error('Chua co dist/antigravity-theme-injector.js. Hay chay `node scripts/build.mjs` truoc.');
  }

  fs.rmSync(targetAppDir, { recursive: true, force: true });

  const contentsDir = path.join(targetAppDir, 'Contents');
  const macOsDir = path.join(contentsDir, 'MacOS');
  const resourcesDir = path.join(contentsDir, 'Resources');
  fs.mkdirSync(macOsDir, { recursive: true });
  fs.mkdirSync(resourcesDir, { recursive: true });

  fs.writeFileSync(path.join(contentsDir, 'Info.plist'), buildInfoPlist(), 'utf8');

  if (fs.existsSync(ANTIGRAVITY_ICON)) {
    fs.copyFileSync(ANTIGRAVITY_ICON, path.join(resourcesDir, 'icon.icns'));
  }

  const exePath = path.join(macOsDir, 'AntigravityCustomTheme');
  const tmpC = path.join(os.tmpdir(), `agy-launcher-${process.pid}.c`);
  try {
    fs.writeFileSync(
      tmpC,
      buildLauncherCSource({
        nodePath: process.execPath,
        injectScriptPath: INJECT_SCRIPT,
        logPath: LOG_PATH
      }),
      'utf8'
    );
    execFileSync('/usr/bin/clang', ['-O2', '-Wall', tmpC, '-o', exePath], { stdio: 'inherit' });
  } finally {
    fs.rmSync(tmpC, { force: true });
  }
  fs.chmodSync(exePath, 0o755);

  execFileSync('/usr/bin/codesign', ['--force', '--deep', '--sign', '-', targetAppDir], {
    stdio: 'inherit'
  });
}

function main() {
  const installToApplications = process.argv.includes('--install');
  const localAppPath = path.join(ROOT_DIR, APP_NAME);
  createBundle(localAppPath);
  console.log(`[OK] Da tao launcher: ${localAppPath}`);

  if (installToApplications) {
    const appsTarget = path.join('/Applications', APP_NAME);
    fs.rmSync(appsTarget, { recursive: true, force: true });
    execFileSync('/bin/cp', ['-R', localAppPath, appsTarget], { stdio: 'inherit' });
    execFileSync('/usr/bin/codesign', ['--force', '--deep', '--sign', '-', appsTarget], {
      stdio: 'inherit'
    });
    console.log(`[OK] Da cai vao Applications: ${appsTarget}`);
  }
}

main();
