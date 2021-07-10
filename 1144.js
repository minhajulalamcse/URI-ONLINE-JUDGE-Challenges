/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1144
 * Problem Name: 1144 - Logical Sequence
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var N = parseInt(lines.shift());
// 1 1 1
// 1 2 2
// 2 4 8
// 2 5 9
// 3 9 27
// 3 10 28
// 4 16 64
// 4 17 65
// 5 25 125
// 5 26 126
var firstValue = 1; 
var secondValue = 1; 
var thirdValue = 1; 

for(var i = 1; i<= N; i++){
    
    firstValue *= i;
    secondValue *= i;
    thirdValue *= i;
    
    console.log(firstValue+' '+secondValue+' '+thirdValue);

    secondValue += secondValue;
    thirdValue += thirdValue;

    console.log(firstValue+' '+secondValue+' '+thirdValue);
}