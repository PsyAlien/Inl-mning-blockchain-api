import { logger } from './logger.js';

export const errorHandler = (err, req, res, next) => {
  logger(err);
  res.status(500).json({ error: err.message });
};
