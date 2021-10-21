const {ethers} = require('hardhat')

async function main() {
  const [account] = await ethers.getSigners();
  const address = "0x45e38644786FF1271611DB23C7B362f8d286523f";

  const ABI = [
    "function unlock(bytes16 _key) public"
  ]

  const contract = new ethers.Contract(address, ABI, account);
  const provider = account.provider;

  const value = await provider.getStorageAt(address, 6);
//   const value = await provider.getStorageAt(address, location + 1);
  console.log(value);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })