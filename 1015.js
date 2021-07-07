/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1015
 * Problem Name: 1015 - Distance Between Two Points
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var [x1, y1] = p1.map(point => parseFloat(point));
var [x2, y2] = p2.map(point => parseFloat(point));

var changeInX = (x2 - x1) * (x2 - x1);
var changeInY = (y2 - y1) * (y2 - y1);

var result = Math.sqrt(changeInX + changeInY);

console.log(result.toFixed(4));