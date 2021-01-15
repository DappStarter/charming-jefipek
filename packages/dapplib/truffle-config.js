require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember erosion grid entire bone student'; 
let testAccounts = [
"0xef5ec01ed62df99f6aced970a4de8f7d8b47cd1b8d352d3f18dace22fc504e56",
"0x4d1a1ee418e0280969bf06f98e8000c4f6fe7c83341c5d9fd1acf8d878f60bbf",
"0x8306f84370bbfa1407e73fca332fb001a73fbade4554391db54e3a6e2b8dc34c",
"0xc230931f6f1282033505f74f18085937e33ba15dac7ca457bb7391d22c6de375",
"0xf1caa1195027f3976dd2fb54b7a8312a57d37c5791b2cebe220f544528cf4bea",
"0x21475cfc93d3c321ab63990b4609b2c138ed181790ca343b4f84a85cdc879f17",
"0x1185369a38178a6a1399c5ff8c8ac56d856afe7591672301bdf587f3bef196b0",
"0x0e844e699c5853b5669f6c9a2ad0cadb0bf9537b5f5ecbcefb9b004ddb50c8d4",
"0x6145952341fe2b151b35a520289df5d073a95bf71e583dc5d3478506481437d4",
"0xd7dd934ab44247fd5b56e59c54ddd7edd42e0dc77548fe66864f2a311ef1e1f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
