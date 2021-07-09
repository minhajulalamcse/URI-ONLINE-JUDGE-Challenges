/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1113
 * Problem Name: 1113 - Ascending and Descending
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
while(true){
    var arr = lines.shift();
    var [a, b] = arr.split(' ').map(input => parseInt(input));

    if(a===b){
        break;
    }

    if(a>b){
        console.log('Decrescente');
    }else{
        console.log('Crescente');
    }
}