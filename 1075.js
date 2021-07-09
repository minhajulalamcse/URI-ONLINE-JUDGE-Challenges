/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1075
 * Problem Name: 1075 - Remaining 2
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 1; i<10000; i++){
    if(i%N===2){
        console.log(i);
    }
}