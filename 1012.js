/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1012
 * Problem Name: 1012 - Area
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var input = lines.shift().split(' ');
var [A, B, C] = input.map(input => parseFloat(input));

var triangulo = 0.5 * A * C;
var circulo = 3.14159 * C * C;
var trapezio = 0.5 * (A + B) * C;
var quadrado = B * B;
var retangulo = A * B;

console.log('TRIANGULO: '+triangulo.toFixed(3));
console.log('CIRCULO: '+circulo.toFixed(3));
console.log('TRAPEZIO: '+trapezio.toFixed(3));
console.log('QUADRADO: '+quadrado.toFixed(3));
console.log('RETANGULO: '+retangulo.toFixed(3));