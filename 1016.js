/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1016
 * Problem Name: 1016 - Distance
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var distance = parseInt(lines.shift());

var minutos = distance * 2;

console.log(minutos+' minutos');