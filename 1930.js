/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1930
 * Problem Name: 1930 - Electrical Outlet
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var sum = 0;
lines.shift().split(' ').map(input=> sum+=(parseInt(input)));
console.log(sum-3);
