class Block {
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    }
}

const Block1 = new Block(
    {timestamp: '5/7/2020', lastHash: 'foo-lasthash',
     hash: 'foo-hash', data: 'foo-data'});

console.log('block1', Block1);