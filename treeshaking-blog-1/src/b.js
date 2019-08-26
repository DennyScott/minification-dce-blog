import c from './c';
import { add } from './d';

export default function checkIn() {
  add(1, 1);
  c();
  console.log('This is b!');
}