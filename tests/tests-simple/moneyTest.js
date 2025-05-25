import {format_currency} from '../../scripts/utils/money.js';

console.log('test suite: format_currency');

console.log('converts cents into dollars');

if (format_currency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');

if (format_currency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');

if (format_currency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}