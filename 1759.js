/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1759
 * Problem Name: 1759 - Ho Ho Ho
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());
var output = '';

for(var i = 0; i<N-1; i++){
    output += 'Ho ';
}

output += 'Ho!';

console.log(output);