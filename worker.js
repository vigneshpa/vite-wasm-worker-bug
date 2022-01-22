import init from './add.wasm';
init().then(exports => console.log(exports.add(1, 2)));
