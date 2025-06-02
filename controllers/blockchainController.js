import { Block } from '../models/block.js';
import { blockchain } from '../models/blockchain.js';

export const getAllBlocks = (req, res) => {
  res.json(blockchain.getAllBlocks());
};

export const getBlockByIndex = (req, res, next) => {
  try {
    const index = parseInt(req.params.index);
    const block = blockchain.getBlock(index);
    if (!block) throw new Error('Block not found');
    res.json(block);
  } catch (err) {
    next(err);
  }
};

export const createBlock = (req, res, next) => {
  try {
    const data = req.body.data;
    if (!data) throw new Error('Missing data');
    const newBlock = new Block(
      blockchain.getAllBlocks().length,
      Date.now(),
      data
    );
    const block = blockchain.addBlock(newBlock);
    res.status(201).json(block);
  } catch (err) {
    next(err);
  }
};
