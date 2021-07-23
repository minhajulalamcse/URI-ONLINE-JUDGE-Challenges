/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1171
 * Problem Name: 1171 - Number Frequence
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var N = parseInt(lines.shift());

 var numbers = [];
 
 for(var i = 0; i<N; i++){
     var num = parseInt(lines.shift());
     numbers.push(num);
 }
 
 numbers.sort((a, b) => a - b);
 
 for(var i = 0; i<N; i++){
     var num = numbers[i];
     var count = 1;
     var j = i + 1;
     while(num==numbers[j]){
         count++;
         j++;
     }
     i = j-1;
     console.log(num+' aparece '+count+' vez(es)');
 }
 