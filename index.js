'use strict';

module.exports = function throttle(fn, timeWindow) {
  let scheduled = null;
  return function() {
    const args = Array.from(arguments);
    if (scheduled === null) {
      scheduled = args;

      setTimeout(()=> {
        fn.apply(null, scheduled);
        scheduled = null;
      }, timeWindow);
    } else {
      scheduled = args;
    }
  };
};

