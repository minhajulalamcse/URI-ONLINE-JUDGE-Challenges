/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1589
 * Problem Name: 1589 - Bob Conduit
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var T = parseInt(lines.shift());

for(var i = 0; i<T; i++){
    var [r1, r2] = lines.shift().split(' ').map(input => parseInt(input));
    console.log(r1 + r2);
}