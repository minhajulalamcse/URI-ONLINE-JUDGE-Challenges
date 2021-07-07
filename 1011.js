/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1011
 * Problem Name: 1011 - Sphere
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var R = parseInt(lines.shift());

var volume = (4/3.0) * 3.14159 * R * R * R;

console.log('VOLUME = '+volume.toFixed(3));