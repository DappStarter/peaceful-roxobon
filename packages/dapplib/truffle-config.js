require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea climb flee skull guard render remind evil journey kitchen orange table'; 
let testAccounts = [
"0xa9a34e35432fee6d00d3620a7472e2b99dbb8d2f55cd0b4d3044c02bf25ee7a7",
"0xfa1b62bc1309f3822f668df35f49c0973fc5262fa477549bd1a000df44f792be",
"0xcba207af3c2602e1c033ea96f17e20a96bbb25789188ad65c7ad84311cf0ff23",
"0xf55fdf854951d7cd99f9396bf2350e89ccc581411aee84562f7d122030b8182c",
"0x5a8f294970a01735dd2fe2156401c3e04050c24489f67639146b84913d00b255",
"0x329f2da4382c9e61d5a957dd597960e578e9ce0ed6c06cfb9952d55c9bde15c0",
"0x6aa13f2672b9cc60c2b3b84d699aab9848702868632f2e6dbb75ecacc295c37c",
"0xac545a7c2dfd5e13aa1b781aa8d99777d69af016cfb4781394a6a8840dc7466d",
"0xd62b3e20c0267491700823b04a21bceeae46bebea97be846c643832a07866a0c",
"0x1bef6aed2e7d2517d11fb10f68da74daed1d199ceaf7b10e9477be897ec0e20a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


