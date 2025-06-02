import fs from 'fs-extra';
import { Block } from './block.js';

const FILE = 'blockchain.json';
const DIFFICULTY = 2;

class Blockchain {
  constructor() {
    this.chain = fs.existsSync(FILE) ? fs.readJsonSync(FILE) : [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const genesis = new Block(0, Date.now(), { msg: 'Genesis Block' }, '0');
    genesis.mineBlock(DIFFICULTY);
    fs.writeJsonSync(FILE, [genesis]);
    return genesis;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(DIFFICULTY);
    this.chain.push(newBlock);
    fs.writeJsonSync(FILE, this.chain);
    return newBlock;
  }

  getAllBlocks() {
    return this.chain;
  }

  getBlock(index) {
    return this.chain.find(b => b.index === index);
  }
}

export const blockchain = new Blockchain();

