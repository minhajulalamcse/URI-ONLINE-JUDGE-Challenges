/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1172
 * Problem Name: 1172 - Array Replacement I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

for(var i = 0; i<10; i++){
    var N = parseInt(lines.shift());
    if(N<=0){
        console.log('X['+i+'] = 1');
    }else{
        console.log('X['+i+'] = '+N);
    }
}