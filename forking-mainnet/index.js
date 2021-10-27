const {legos} = require('@studydefi/money-legos')
const {ethers} = require('ethers')

const LOCALHOST = 'http://localhost:8545'

// HH second account private key
const HH_PRIV_KEY = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'

const provider = new ethers.providers.JsonRpcProvider(LOCALHOST)
const wallet = new ethers.Wallet(HH_PRIV_KEY, provider)

const wETHContract = new ethers.Contract(
    legos.erc20.weth.address,
    legos.erc20.weth.abi,
    wallet
)

const main = async function () {
    await wETHContract.deposit({
        value: ethers.utils.parseEther("3.0"),
        gasLimit: 200000
    })

    const balance = await wETHContract.balanceOf(wallet.address)
    console.log('wETH balance: ', balance.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});