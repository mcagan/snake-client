/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const {MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP} = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = () => stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write(MOVE_UP);
    } else if (key === 'a') {
      conn.write(MOVE_LEFT);
    } else if (key === 's') {
      conn.write(MOVE_DOWN);
    } else if (key === 'd') {
      conn.write(MOVE_RIGHT);
    } else if (key === 'q') {
      conn.write('Say: Got it!');
    } else if (key === 'h') {
      conn.write('Say: Haha');
    } else if (key === 'i') {
      conn.write('Say: I win');
    }
  });
  handleUserInput();
  return stdin;
};

module.exports = {setupInput};