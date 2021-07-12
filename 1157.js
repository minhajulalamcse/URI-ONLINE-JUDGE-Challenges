/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1157
 * Problem Name: 1157 - Divisors I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 0; i<=N; i++){
    if(N%i===0){
        console.log(i);
    }
}