/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1142
 * Problem Name: 1142 - PUM
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var count = 0;

for(var i = 0; i<N; i++){
    console.log(++count + ' ' + ++count + ' ' + ++count + ' ' + 'PUM');
    count++;
}