/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1006
 * Problem Name: 1006 - Average 2
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
var c = parseFloat(lines.shift());

var media = (a * 0.2 + b * 0.3 + c * 0.5)/(0.2+0.3+0.5);

console.log('MEDIA = '+media.toFixed(1));