const Compound = require('@compound-finance/compound-js');

const compound = new Compound();
let price;

(async function () {

  price = await compound.getPrice(Compound.WBTC);
  console.log('WBTC in USD', price); // 6 decimals, see Open Price Feed docs

  price = await compound.getPrice(Compound.BAT, Compound.USDC); // supports cTokens too
  console.log('BAT in USDC', price);

})().catch(console.error);