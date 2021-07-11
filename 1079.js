/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1079
 * Problem Name: 1179 - Weighted Averages
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
    var arr = lines.shift().split(' ').map(input => parseFloat(input));
    var media = (arr[0] * 2 + arr[1] * 3 + arr[2] * 5)/10 ;
    console.log(media.toFixed(1));
}