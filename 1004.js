/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1004
 * Problem Name: 1004 - Simple Product
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [a, b] = lines.map(input => parseInt(input));

console.log('PROD = '+(a*b));