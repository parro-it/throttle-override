# throttle-override

> Takes a function, returns a function that will can only be called a certain amount of times per second.

> Original function is called only when specified period has elapsed. If called more than once in the period, preceding calls are removed from queue, and last one get called on first scheduled time.


[![Travis Build Status](https://img.shields.io/travis/parro-it/throttle-override.svg)](http://travis-ci.org/parro-it/throttle-override)
[![NPM module](https://img.shields.io/npm/v/throttle-override.svg)](https://npmjs.org/package/throttle-override)
[![NPM downloads](https://img.shields.io/npm/dt/throttle-override.svg)](https://npmjs.org/package/throttle-override)

## Installation

```bash
npm install --save throttle-override
```

## Usage

```javascript
  const throttle = require('throttle-override');

  const conquer = throttle((what)=>{
    console.log(what + ' is conquered!');
  }, 1000 * 60 * 60); // once in a hour

  conquer('The world');   // called at 10:00, it will
                          // be scheduled to run at 11:00

  // later ...

  conquer('The universe');   // called at 10:15, it will
                             // be scheduled to run at 11:00
                             // conquer('The world') call is discarded

  // later ...

  conquer('Mars');           // called at 10:16, it will
                             // be scheduled to run at 11:00
                             // conquer('The universe') call is discarded

  // At 11:00 Mars is conquered!

  // later ...

  conquer('Jupiter');        // called at 11:16, it will
                             // be scheduled to run at 12:00

```

## License


The MIT License (MIT)

Copyright (c) 2016 parro-it
