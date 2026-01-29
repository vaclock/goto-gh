#!/usr/bin/env node

import { exec } from 'node:child_process';

const username = process.argv[2];

if (!username) {
  console.log('❌ 请输入 GitHub 用户名，例如: npx goto-gh antfu');
  process.exit(1);
}

const url = `https://github.com/${username}`;
const start = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';

console.log(`🚀 正在为你跳转到: ${url}`);
exec(`${start} ${url}`);