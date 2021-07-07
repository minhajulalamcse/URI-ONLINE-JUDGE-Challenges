/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1007
 * Problem Name: Difference
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
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());

var diferenca = (a * b - c * d);

console.log('DIFERENCA = '+diferenca);