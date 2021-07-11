/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1149
 * Problem Name: 1149 - Summing Consecutive Integers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var arr = lines.shift().split(' ').map(input=>parseInt(input));

 var A = arr[0];
 var N = arr[1];
 
 var position = 2;
 
 while(N<=0){
     N = arr[position];
     position++;
 }
 var total = A;
 var count = 1;
 
 while(count!=N){
     A = ++A;
     total += A;
     count++;
 }
 
 console.log(total);