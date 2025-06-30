import os from 'os';
import http from 'http';

const server = {
  hostname: os.hostname(),
  platform: os.platform(),
  arch: os.arch(),
  uptime: os.uptime(),

  getInfo() {
    return JSON.stringify({
      hostname: this.hostname,
      platform: this.platform,
      arch: this.arch,
      uptime_seconds: this.uptime
    });
  }
};
