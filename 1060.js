/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1060
 * Problem Name: Positive Numbers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var positive = 0;

for(var i = 0; i<6; i++){
    var value = parseInt(lines.shift());
    if(value>0){
        positive++;
    }
}

console.log(positive+' valores positivos');
