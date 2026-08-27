// TEMPORARY — demonstrates that the SAST scan detects new findings.
// Not imported by the application. Delete after the demo.

const { exec } = require("child_process");

// Command injection: user input concatenated into a shell command.
function backup(userPath) {
  exec("tar -czf backup.tgz " + userPath);
}

module.exports = { backup };
