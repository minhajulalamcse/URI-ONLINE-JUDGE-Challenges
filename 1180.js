/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1180
 * Problem Name: 1180 - Lowest Number and Position
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());
var arr = lines.shift().split(' ').map(input=>parseInt(input));

var lowestNumber = 0;
var position = 0;

for(var i = 0; i<N; i++){
    if(i===0){
        lowestNumber = arr[i];
        position = i;
    }else{
        if(arr[i]<lowestNumber){
            lowestNumber = arr[i];
            position = i;
        }
    }
}

console.log('Menor valor: '+lowestNumber);
console.log('Posicao: '+position);