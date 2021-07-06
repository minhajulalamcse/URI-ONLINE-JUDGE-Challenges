/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1002
 * Problem Name: Area of a Circle
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var pi = 3.14159;

var radius = parseFloat(lines.shift());

var area = pi * radius * radius;

console.log('A = '+ area.toFixed(4));
