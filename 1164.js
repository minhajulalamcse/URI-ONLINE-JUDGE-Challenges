/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1164
 * Problem Name: 1164 - Perfect Number
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 0; i<N; i++){
    var X = parseInt(lines.shift());
    var sum = 0;
    for(var j = 1; j<X; j++){
        if(X%j==0){
            sum+=j;
        }
    }
    if(sum===X){
        console.log(X+' eh perfeito');
    }else{
        console.log(X+' nao eh perfeito');
    }
}