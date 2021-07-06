/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1001
 * Problem Name: Extremely Basic
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [a, b] = lines.map(input => parseInt(input));

console.log('X = '+ (a+b));