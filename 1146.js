/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1146
 * Problem Name: 1146 - Growing Sequences
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

while(true){
    var N = parseInt(lines.shift());
    if(N===0){
        break;
    }
    var output = '';
    for(var i = 1; i<=N-1; i++){
        output += i;
        output += ' ';
    }
    output += i;
    console.log(output);
}