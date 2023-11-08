import shuffle from './shuffle.jsx'
import findOdd from './findOdd.jsx'
import countSmileyFace from './countSmileyFace.jsx'
import {expect, describe, test} from '@jest/globals';

describe('shuffle-function', () => {
  test('shuffle-1', () => {
    expect(shuffle('a')).toStrictEqual(['a']);
  });
  test('shuffle-2', () => {
    expect(shuffle('ab')).toStrictEqual(['ab', 'ba']);
  });
  test('shuffle-3', () => {
    expect(shuffle('abc')).toStrictEqual(['abc','acb','bac','bca','cab','cba']);
  });
  test('shuffle-4', () => {
    expect(shuffle('aabb')).toStrictEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
})

describe('findOdd-function', () => {
  test('findOdd-1', () => {
    expect(findOdd([7])).toStrictEqual(7);
  });
  test('findOdd-2', () => {
    expect(findOdd([0])).toStrictEqual(0);
  });
  test('findOdd-3', () => {
    expect(findOdd([1,1,2])).toStrictEqual(2);
  });
  test('findOdd-4', () => {
    expect(findOdd([0,1,0,1,0])).toStrictEqual(0);
  });
  test('findOdd-5', () => {
    expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toStrictEqual(4);
  });
})

describe('countSmileyFace-function', () => {
  test('countSmileyFace-1', () => {
    expect(countSmileyFace([':)', ';(', ';}', ':-D'])).toStrictEqual(2);
  });
  test('countSmileyFace-2', () => {
    expect(countSmileyFace([';D', ':-(', ':-)', ';~)'])).toStrictEqual(3);
  });
  test('countSmileyFace-3', () => {
    expect(countSmileyFace([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(1);
  });
  test('countSmileyFace-4', () => {
    expect(countSmileyFace([])).toStrictEqual(0);
  });
})
