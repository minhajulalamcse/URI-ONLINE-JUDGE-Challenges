/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1866
 * Problem Name: 1866 - Bill
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
    var N = parseInt(lines.shift());
    if(N%2==0){
        console.log(0);
    }else{
        console.log(1);
    }
}