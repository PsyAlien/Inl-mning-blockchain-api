import express from 'express';
import blockchainRoutes from './routes/blockchainRoutes.js';
import { errorHandler } from './services/errorHandler.js';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/blocks', blockchainRoutes);

// Central error handling
app.use(errorHandler);

export default app;
