/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1021
 * Problem Name: 1021 - Banknotes and Coins
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var value = lines.shift();

var decimal = value.toString().split('.');
decimal = parseInt(decimal[1]);

var num = parseInt(value);

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

var fiftyCoins = getDivision(decimal, 50);
remainder = getRemainder(decimal, 50);
var twentyFiveCoins = getDivision(remainder, 25);
remainder = getRemainder(remainder, 25);
var tenCoins = getDivision(remainder, 10);
remainder = getRemainder(remainder,10);
var fiveCoins = getDivision(remainder, 5);
remainder = getRemainder(remainder, 5);
var oneCoins = remainder;

console.log('NOTAS:');
console.log(hundredNotes+' nota(s) de R$ 100.00');
console.log(fiftyNotes+' nota(s) de R$ 50.00');
console.log(twentyNotes+' nota(s) de R$ 20.00');
console.log(tenNotes+' nota(s) de R$ 10.00');
console.log(fiveNotes+' nota(s) de R$ 5.00');
console.log(twoNotes+' nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(oneNotes+' moeda(s) de R$ 1.00');
console.log(fiftyCoins+' moeda(s) de R$ 0.50');
console.log(twentyFiveCoins+' moeda(s) de R$ 0.25');
console.log(tenCoins+' moeda(s) de R$ 0.10');
console.log(fiveCoins+' moeda(s) de R$ 0.05');
console.log(oneCoins+' moeda(s) de R$ 0.01');

