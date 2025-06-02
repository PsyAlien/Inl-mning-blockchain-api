import express from 'express';
import { getAllBlocks, getBlockByIndex, createBlock } from '../controllers/blockchainController.js';

const router = express.Router();

router.get('/', getAllBlocks);
router.get('/:index', getBlockByIndex);
router.post('/', createBlock);

export default router;
