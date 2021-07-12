/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1165
 * Problem Name: 1165 - Prime Number
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
    var prime = true;
    for(var j = 2; j<X; j++){
        if(X%j==0){
            prime = false;
            break;
        }
    }
    if(prime){
        console.log(X+' eh primo');
    }else{
        console.log(X+' nao eh primo');
    }
}