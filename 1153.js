/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1153
 * Problem Name: 1153 - Simple Factorial
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var total = N;

for(var i = 1; i<N; i++){
    total *= (N-i);
}

console.log(total);