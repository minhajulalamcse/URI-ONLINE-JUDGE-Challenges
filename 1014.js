/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1014
 * Problem Name: 1014 - Consumption
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var totalDistance = parseInt(lines.shift());
var totalFuel = parseFloat(lines.shift());

var result = totalDistance/totalFuel;

console.log(result.toFixed(3)+' km/l');