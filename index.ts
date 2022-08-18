import './style.css';
import { isPalindrome } from './is-palindrome';

interface TestCase {
  text: string;
  expected: boolean;
}

const app = document.getElementById('app');

function checkTest(test: TestCase) {
  const result: boolean = isPalindrome(test.text);

  const resultClass =
    result !== test.expected ? 'invalid-result' : 'valid-result';

  const item = document.createElement('div');
  item.classList.add('item');

  item.innerHTML = `
  <h3 class="text">${test.text}</h3>
  <p>expected - <span class="expected">${test.expected}</span>; result-<span class="${resultClass}">${result}</span></p>
  `;

  app.append(item);
}

const tests: TestCase[] = [
  { text: 'annb', expected: false },
  { text: 'anna', expected: true },
  { text: 'redivider', expected: true },
  { text: 'car', expected: false },
  { text: 'reviver', expected: true },
  { text: 'deified', expected: true },
  { text: 'level', expected: true },
  { text: 'something', expected: false },
  { text: 'radar', expected: true },
  { text: 'step on no pets', expected: true },
];

tests.forEach(checkTest);
