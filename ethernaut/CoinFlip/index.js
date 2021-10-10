const {ethers} = require('hardhat')

async function main() {
  const [account] = await ethers.getSigners();
  const address = "0xa3359EE6da47f642ACA1068DeDaE456DF9063325";

  const ABI = [
    "function flip(bool _guess) public returns (bool)",
    "function consecutiveWins() public view returns (uint256)"
  ]

  const contract = new ethers.Contract(address, ABI, account);

  const provider = account.provider
  const FACTOR = ethers.BigNumber.from("57896044618658097711785492504343953926634992332820282019728792003956564819968");
  let prevBlock, currentBlock


    console.log('Starting to guess!')
    // Emitted on every block change
    let consecutiveRight = 0
    while (1) {
      const wins = await contract.consecutiveWins()
      console.log('Wins: ', wins.toNumber())
      if (wins.toNumber() >= 10 ) 
        break;

      const block = await provider.getBlock("latest")
      const hash = block.hash
      const num = ethers.BigNumber.from(hash)
      const val = num.div(FACTOR).toNumber() == 1

      const ret = await contract.connect(account).flip(val, {gasLimit: 100000})
      await ret.wait()
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });