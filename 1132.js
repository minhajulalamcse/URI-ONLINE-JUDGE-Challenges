/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1132
 * Problem Name: 1132 - Multiples of 13
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

var smallest, largest;
smallest = x;
largest = y;

if(x>y){
    smallest = y;
    largest = x;
}

var total = 0;

for(var i = smallest; i<=largest; i++){
    if(i%13!==0){
        total += i;
    }
}

console.log(total);
