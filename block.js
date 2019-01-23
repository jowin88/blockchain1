sha256 = require("js-sha256");
class Block {
  constructor(self, index, timestamp, data, previous_hash) {
    this.self = self;
	this.index = index;
	this.timestamp = timestamp;
	this.data = data;
	this.previous_hash = previous_hash;
	this.hash = this.hash_block();
  }

  hash_block() {
	this.sha = sha256.create();
	this.sha.update(
		String(this.index)
		+String(this.timestamp)
		+String(this.data)
		+String(this.previous_hash)
	);
	return this.sha.hex();
  }
}
exports.block = Block;