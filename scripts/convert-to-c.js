'use strict';

console.log('-- loading: convertToC');


function convertToC() { }


{
  console.log('-- testing: convertToC ');
  debugger;

  const _1_arg = -22;
  const _1_expect = -30;
  const _1_actual = convertToC(_1_arg);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg = 14;
  const _2_expect = -10;
  const _2_actual = convertToC(_2_arg);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg = 32;
  const _3_expect = 0;
  const _3_actual = convertToC(_3_arg);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg = 68;
  const _4_expect = 20;
  const _4_actual = convertToC(_4_arg);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg = 86;
  const _5_expect = 30;
  const _5_actual = convertToC(_5_arg);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg = -40;
  const _6_expect = -40;
  const _6_actual = convertToC(_6_arg);
  console.assert(_6_actual === _6_expect, 'Test 6');
}


function convertToCHandler() {
  debugger;

  // read user input

  // core logic
  const result = convertToC(f);

  // display for use

  // log for developers
}
