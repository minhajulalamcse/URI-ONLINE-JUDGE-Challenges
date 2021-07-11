/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1080
 * Problem Name: 1080 - Highest and Position
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var highest = -10000;
var position = 0;

for(var i = 0; i<100; i++){
    var N = parseInt(lines.shift());
    if(N>highest){
        highest = N;
        position = i + 1;
    }
}

console.log(highest);
console.log(position);