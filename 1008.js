/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1008
 * Problem Name: Salary
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var number = parseInt(lines.shift());
var hour = parseInt(lines.shift());
var amountPerHour = parseFloat(lines.shift());

console.log('NUMBER = '+number);
console.log('SALARY = U$ '+(hour*amountPerHour).toFixed(2));