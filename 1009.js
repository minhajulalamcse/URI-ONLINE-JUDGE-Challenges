/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1009
 * Problem Name: 1009 - Salary with Bonus
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var name = lines.shift();
var salary = parseFloat(lines.shift());
var totalSell = parseFloat(lines.shift());

var totalPay = salary + totalSell * 0.15;

console.log('TOTAL = R$ '+totalPay.toFixed(2));