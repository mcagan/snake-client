const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');

let connObj = connect();

setupInput(connObj);

