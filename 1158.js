/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1158
 * Problem Name: 1158 - Sum of Consecutive Odd Numbers III
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
    var [x, y] = lines.shift().split(' ').map(input => parseInt(input));
    var sum = 0;
    var count = 0;
    while(count!=y){
        if(x%2!==0){
            sum+=x; 
            count++;
        }
        x++;
    }
    console.log(sum);
}