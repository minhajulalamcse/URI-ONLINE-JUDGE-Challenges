/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/2060
 * Problem Name: 2060 - Bino's Challenge
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var arr = lines.shift().split(' ').map(input=>parseInt(input));

var multipleOfTwo = 0,
    multipleOfThree = 0,
    multipleOfFour = 0,
    multipleOfFive = 0;

for(var i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        multipleOfTwo++;
    }
    if(arr[i]%3==0){
        multipleOfThree++;
    }
    if(arr[i]%4==0){
        multipleOfFour++;
    }
    if(arr[i]%5==0){
        multipleOfFive++;
    }
}

console.log(multipleOfTwo+' Multiplo(s) de 2');
console.log(multipleOfThree+' Multiplo(s) de 3');
console.log(multipleOfFour+' Multiplo(s) de 4');
console.log(multipleOfFive+' Multiplo(s) de 5');