import fs from 'fs';
import path from 'path';

const logFile = path.join('error.log');

export const logger = (err) => {
  const log = `[${new Date().toISOString()}] ${err.stack || err.message}\n`;
  fs.appendFileSync(logFile, log);
};
