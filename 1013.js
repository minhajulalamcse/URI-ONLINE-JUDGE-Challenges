/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1013
 * Problem Name: 1013 - The Greatest
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var input = lines.shift().split(' ');
var [A, B, C] = input.map(input => parseInt(input));

function findLargestNumberFromTwo(a , b){
    return a > b ? a : b;
}

var largestNumber = findLargestNumberFromTwo(A, findLargestNumberFromTwo(B, C));

console.log(largestNumber+' eh o maior');
