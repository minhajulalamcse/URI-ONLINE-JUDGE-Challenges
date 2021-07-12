/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1159
 * Problem Name: 1159 - Sum of Consecutive Even Numbers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

while(true){
    var N = parseInt(lines.shift());
    if(N==0){
        break;
    }
    var count = 0;
    var sum = 0;
    while(count!=5){
        if(N%2==0){
            sum += N;
            count++;
        }
        N++;
    }
    console.log(sum);
}