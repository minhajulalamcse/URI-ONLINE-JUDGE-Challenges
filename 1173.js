/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1173
 * Problem Name: 1173 - Array fill I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

console.log('N[0] = '+N);

for(var i = 1; i<10; i++){
    N = N * 2;
    console.log('N['+i+'] = '+N);
}