/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1071
 * Problem Name: 1071 - Sum of Consecutive Odd Numbers I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var largestNumber = a;
var smallestNumber = b;

if(a<b){
    largestNumber = b;
    smallestNumber = a;
}

var total = 0;

for(var i = smallestNumber+1; i<largestNumber; i++){
    if(i%2!=0){
        total += i;
    }
}

console.log(total);