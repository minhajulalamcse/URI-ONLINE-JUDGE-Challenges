/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1155
 * Problem Name: 1155 - S Sequence
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
//S = 1 + 1/2 + 1/3 + … + 1/100

var s = 0;

for(var i = 1; i<=100; i++){
    s += 1/i;
}
console.log(s.toFixed(2));