/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1020
 * Problem Name: 1020 - Age in Days
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var days = parseInt(lines.shift());

function getRemainder(a, b){
    return a%b;
}
function getDivision(a, b){
    return parseInt(a/b);
}

var remainder = 0;

var years = getDivision(days, 365);
remainder = getRemainder(days, 365);

var months = getDivision(remainder, 30);
remainder = getRemainder(remainder, 30);

days = remainder;

console.log(years+' ano(s)');
console.log(months+' mes(es)');
console.log(days+' dia(s)');