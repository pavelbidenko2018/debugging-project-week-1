'use strict';

console.log('-- loading: convertToF');


function convertToF(celsius) { 
  const fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}


{
  console.log('-- testing: convertToF ');
  debugger;

  const _1_arg = -30;
  const _1_expect = -22;
  const _1_actual = convertToF(_1_arg);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg = -10;
  const _2_expect = 14;
  const _2_actual = convertToF(_2_arg);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg = 0;
  const _3_expect = 32;
  const _3_actual = convertToF(_3_arg);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg = 20;
  const _4_expect = 68;
  const _4_actual = convertToF(_4_arg);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg = 30;
  const _5_expect = 86;
  const _5_actual = convertToF(_5_arg);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg = -40;
  const _6_expect = -40;
  const _6_actual = convertToF(_6_arg);
  console.assert(_6_actual === _6_expect, 'Test 6');
}


function convertToFHandler() {
  debugger;

  // read user input
  const celsius = prompt("Enter a celsius value: ");
  let numberValue = Number(celsius);
  
  // before moving on ... type check!
 
  if (isNaN(numberValue))
   {alert ('please enter number');} 
   
   if (celsius === null) {
    return;} //break out of the function early
   
  

  // core logic
  
  const result =Math.round(convertToF(celsius));
  
  // display for use
  var message=( celsius + '\xB0 Celsius is ' + result + ' \xB0 Fahrenheit .');
  alert(message);

  // log for developers
  console.log('celsius', typeof celsius, '\n', celsius);
  console.log('numberValue', typeof numberValue, '\n', numberValue);
  console.log('result', typeof result, '\n', result);
  console.log('message', typeof message, '\n', message);
} 
