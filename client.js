const net = require('net');
const { IP, PORT } = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  })

  conn.on('connect', () => {
    conn.write('Name: MC');
    // conn.write('Move: left');
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 50)
  });

  return conn;
}

module.exports = {connect};