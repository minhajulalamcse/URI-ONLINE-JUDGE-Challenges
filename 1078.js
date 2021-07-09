/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1078
 * Problem Name: 1078 - Multiplication Table
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 1; i<=10; i++){
    console.log(i+' x '+N+' = '+i*N);
}