import { cons, car, cdr } from '@hexlet/pairs';

import {
  createGame, createQA, getRandomFromRange,
} from '../index.js';

function createOperator(operatorString, operatorFunc) {
  return cons(operatorString, operatorFunc);
}

function getOperatorString(operator) {
  return car(operator);
}

function getOperatorFunc(operator) {
  return cdr(operator);
}

const sumOperator = createOperator('+', (number1, number2) => number1 + number2);
const subOperator = createOperator('-', (number1, number2) => number1 - number2);
const multiOperator = createOperator('*', (number1, number2) => number1 * number2);

function getRandomOperator() {
  const operators = [sumOperator, subOperator, multiOperator];

  return operators[getRandomFromRange(0, operators.length - 1)];
}

function qaGenerator() {
  const operand1 = getRandomFromRange(0, 10);
  const operand2 = getRandomFromRange(0, 10);
  const operator = getRandomOperator();
  const operatorFunc = getOperatorFunc(operator);
  const operatorString = getOperatorString(operator);
  const expResultString = `${operand1} ${operatorString} ${operand2}`;
  const expResult = String(operatorFunc(operand1, operand2));

  return createQA(expResultString, expResult);
}

const description = 'What is the result of the expression?';

const startGame = createGame(description, qaGenerator);

export default startGame;
