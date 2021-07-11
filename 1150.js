/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1150
 * Problem Name: 1150 - Exceeding Z
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var X = parseInt(lines.shift());

var Z = parseInt(lines.shift());

while(Z<=X){
    Z = parseInt(lines.shift());
}

var count = 0;
var total = 0;

while(total<Z){
    total+=X;
    X++;
    count++;
}

console.log(count);