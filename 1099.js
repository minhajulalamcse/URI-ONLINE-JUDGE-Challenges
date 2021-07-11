/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1099
 * Problem Name: 1099 - Sum of Consecutive Odd Numbers II
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
    var smallest = x;
    var largest = y;

    if(x>y){
        smallest = y;
        largest = x;
    }

    var total = 0;
    for(var m = smallest + 1; m < largest; m++){
        if(m%2!=0){
            total += m;
        }
    }
    console.log(total);
}