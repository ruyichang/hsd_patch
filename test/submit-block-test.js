/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off" */

'use strict';

const assert = require('bsert');
const Headers = require('../lib/primitives/headers');
const Validator = require('bval');

describe('SubmitBlock', function () {
    it('should match mainnet p2pkh address', () => {
        const hdr = Headers.fromMiner(Buffer.from("0bb9f7ca278c0a6000000000ac6266e23936115031da3d9cc7094819a9056cf70000000000000001dd154f601e7da9892e3418c03ab6b3719cabf07ff14ffcaeac6266e239361151eccf72fcd974e190873174372982dbd7bf0ac7cac366f63846890d96c182158e29f71896dfef9309d0c6960f8d4b49403948ee43bcb60814f4000c5b000000db000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300f0eec3d9d81f74dbedf440acf5f7ffcffe444781e938bdb96a0849d1976d1e7db04b5bc5fe686c7aedd46d925a9edd4f5e0c3bab708ad5f7ec528c1e5e4e10000000065dc0419", 'hex'));
        console.log(hdr);
        console.log('---------------------------------------------------------');
        console.log('_handleWork hdr.version     :', hdr.version);
        console.log('_handleWork hdr.prevBlock   :', hdr.prevBlock.toString('hex'));
        console.log('_handleWork hdr.merkleRoot  :', hdr.merkleRoot.toString('hex'));
        console.log('_handleWork hdr.witnessRoot :', hdr.witnessRoot.toString('hex'));
        console.log('_handleWork hdr.treeRoot    :', hdr.treeRoot.toString('hex'));
        console.log('_handleWork hdr.reservedRoot:', hdr.reservedRoot.toString('hex'));
        console.log('_handleWork hdr.time        :', hdr.time);
        console.log('_handleWork hdr.bits        :', hdr.bits);
        console.log('_handleWork hdr.nonce       :', hdr.nonce);
        console.log('_handleWork hdr.extraNonce  :', hdr.extraNonce.toString('hex'));
        console.log('_handleWork hdr.mask        :', hdr.mask.toString('hex'));       // 00000XXXX...//I set it to all 0
        console.log('_handleWork hdr._maskHash   :', hdr._maskHash.toString('hex'));  // black2b with previous hash
        console.log('_handleWork hdr._hash       :', hdr._hash.toString('hex'));
        console.log('---------------------------------------------------------');
        //assert.strictEqual(c1, "1");
    });
});
