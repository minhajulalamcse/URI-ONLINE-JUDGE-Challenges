/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1019
 * Problem Name: 1019 - Time Conversion
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var seconds = parseInt(lines.shift());

function getRemainder(a, b){
    return a%b;
}
function getDivision(a, b){
    return parseInt(a/b);
}

var remainder = 0;

var hours = getDivision(seconds, 3600);
remainder = getRemainder(seconds, 3600);

var minutes = getDivision(remainder, 60);
remainder = getRemainder(remainder, 60);

var seconds = remainder;

console.log(hours+':'+minutes+':'+seconds);