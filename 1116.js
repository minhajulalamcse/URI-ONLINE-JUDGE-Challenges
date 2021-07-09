/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1116
 * Problem Name: 1116 - Dividing X by Y
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
    var [x, y] = lines.shift().split(' ').map(input=>parseInt(input));
    if(y===0){
        console.log('divisao impossivel')
    }else{
        var result = x/y;
        console.log(result.toFixed(1));
    }
}