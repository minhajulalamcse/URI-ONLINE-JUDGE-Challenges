/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1176
 * Problem Name: 1176- Fibonacci Array
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var T = parseInt(lines.shift());

for(var j = 0; j<T; j++){
    var N = parseInt(lines.shift());
    var sum = 0;
    var first = 0;
    var second = 1;

    for(var i = 1; i<=N; i++){
        if(i===1){
            first = 0;
        }else if(i===2){
            second = 1;
        }else{
            first = second;
            second = sum;
        }
        sum = first + second;
    }
    console.log('Fib('+N+') = '+sum);
}
