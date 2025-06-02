import { describe, it, expect } from 'vitest';
import { Block } from '../models/block.js';

describe('Block', () => {
  it('should create a valid hash after mining', () => {
    const block = new Block(1, Date.now(), { test: 'data' }, '0');
    block.mineBlock(2);
    expect(block.hash.startsWith('00')).toBe(true);
  });
});
