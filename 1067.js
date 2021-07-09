/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1067
 * Problem Name: 1067 - Odd Numbers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var num = parseInt(lines.shift());

for(var i = 1; i<=num; i=i+2){
    console.log(i);
}