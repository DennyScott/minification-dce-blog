import c from './c';

export function add(x, y) {
  c();
  console.log('add');
  return x + y;
}

export function multiply(x, y) {
  c()
  console.log('multiply');
	return x * y;
}