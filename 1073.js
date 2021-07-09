/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1073
 * Problem Name: 1073 - Even Square
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var num = parseInt(lines.shift());

for(var i = 2; i<=num; i+=2){
    console.log(i+'^2 = '+i*i);
}