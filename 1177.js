/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1177
 * Problem Name: 1177 - Array Fill II
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 0; i<1000;){
    for(var j = 0; j<N; j++){
        console.log('N['+i+'] = '+j);
        i++;
        if(i>=1000){
            break;
        }
    }
}