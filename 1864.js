/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1864
 * Problem Name: 1864 - Our Days Are Never Coming Back
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var sentence ="life is not a problem to be solved";

var output = "";

for(var i = 0; i<N; i++){
    output += sentence[i];
}

console.log(output.toUpperCase());