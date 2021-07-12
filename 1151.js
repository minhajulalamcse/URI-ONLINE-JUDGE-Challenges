/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1151
 * Problem Name: 1151 - Easy Fibonacci
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
var sum = 0;
var first = 0;
var second = 0;

for(var i = 1; i<=N; i++){
    if(i === 1){
        output += "0";
        first = 0;
    }else if(i === 2){
        output += " 1";
        second = 1;
    }else {
        output += (" "+sum);
        first = second;
        second = sum;
    }
    sum = first + second;
}

console.log(output);