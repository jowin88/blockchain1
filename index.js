block = require("./block").block;
block = new block(1,2,3,4,5);
console.log("Testing block hash : " + block.hash);
// end first testing part
create_genesis_block = require("./create_genesis_block").create_genesis_block;
console.log("Testing 1st block hash : " + create_genesis_block.hash_block());
// end 2nd testing part
next_block = require("./next_block").next_block;
console.log("Testing next block hash : " + next_block(create_genesis_block).hash_block());