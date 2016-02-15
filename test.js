const test = require('tape');
const throttle = require('./');

test('preceding calls are not executed', t => {
  const arr = [];
  const fn = throttle(arg => arr.push(arg), 10);
  fn(1);
  fn(2);
  fn(42);

  setTimeout(() => {
    t.deepEqual(arr, [42]);
    t.end();
  }, 20);

});
