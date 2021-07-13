/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1175
 * Problem Name: 1175 - Array change I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = [];

for(var i = 0; i<20; i++){
    arr[i] = parseInt(lines.shift());
}
var j = 0;
for(var i = 19; i>=0; i--){
    console.log('N['+j+'] = '+arr[i]);
    j++;
}