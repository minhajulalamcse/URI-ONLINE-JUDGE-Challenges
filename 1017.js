/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1017
 * Problem Name: 1017 - Fuel Spent
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var hour = parseInt(lines.shift());
var distance = parseInt(lines.shift());

var totalDistance = hour * distance;

var totalFuel = totalDistance/12.0;

console.log(totalFuel.toFixed(3));