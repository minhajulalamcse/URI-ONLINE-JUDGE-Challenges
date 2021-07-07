/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1005
 * Problem Name: Average 1
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

var media = (a * 0.35 + b * 0.75)/(0.35 + 0.75);

console.log('MEDIA = '+media.toFixed(5));