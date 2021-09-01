const identicon = require('identicon')
const {create} = require('ipfs-http-client')
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

async function main() {
    const buffer = identicon.generateSync({ id: 'burhan', size: 400 })

    const {cid} = await client.add(buffer)
    console.log(cid)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});