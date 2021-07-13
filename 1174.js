/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1174
 * Problem Name: 1174 - Array Selection I
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

for(var i = 0; i<100; i++){
    var num = parseFloat(lines.shift());
    if(num<=10){
        console.log('A['+i+'] = '+num.toFixed(1));
    }
}