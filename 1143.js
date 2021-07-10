/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1143
 * Problem Name: 1143 - Squared and Cubic
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var N = parseInt(lines.shift());

for(var i = 1; i<= N; i++){
    
    firstValue = i;
    secondValue = i*i;
    thirdValue = i*i*i;
    
    console.log(firstValue+' '+secondValue+' '+thirdValue);
}