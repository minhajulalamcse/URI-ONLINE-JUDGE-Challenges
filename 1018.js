/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1018
 * Problem Name: 1018 - Banknotes
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var num = parseInt(lines.shift());

function getRemainder(a, b){
    return a%b;
}
function getDivision(a, b){
    return parseInt(a/b);
}

var remainder = 0;

var hundredNotes = getDivision(num, 100);
remainder = getRemainder(num, 100);
var fiftyNotes = getDivision( remainder, 50);
remainder = getRemainder(remainder, 50);
var twentyNotes = getDivision( remainder,20);
remainder = getRemainder(remainder, 20);
var tenNotes = getDivision(remainder,10);
remainder = getRemainder(remainder, 10);
var fiveNotes = getDivision(remainder,5);
remainder = getRemainder(remainder, 5);
var twoNotes = getDivision(remainder,2);
remainder = getRemainder(remainder, 2);
var oneNotes = getDivision(remainder,1);
remainder = getRemainder(remainder, 1);

console.log(num);
console.log(hundredNotes+' nota(s) de R$ 100,00');
console.log(fiftyNotes+' nota(s) de R$ 50,00');
console.log(twentyNotes+' nota(s) de R$ 20,00');
console.log(tenNotes+' nota(s) de R$ 10,00');
console.log(fiveNotes+' nota(s) de R$ 5,00');
console.log(twoNotes+' nota(s) de R$ 2,00');
console.log(oneNotes+' nota(s) de R$ 1,00');