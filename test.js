const test = require('tape');
const throttleOverride = require('./');

test('it work!', t => {
  const result = throttleOverride();
  t.equal(result, 42);
  t.end();
});
