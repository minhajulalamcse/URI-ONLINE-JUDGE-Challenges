/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1156
 * Problem Name: 1156 - S Sequence II
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

//S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

var s = 0;
var x = 1;

for(var i = 1; i<=39 ; i = i + 2){
    if(i==1){
        s += i;
    }else{
        x = x*2;
        s += (i/x);
    }
}

console.log(s.toFixed(2));