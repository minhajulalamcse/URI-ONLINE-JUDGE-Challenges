/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1185
 * Problem Name: 1185 - Above the Secundary Diagonal
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var operation = lines.shift();

 var positions = [];
 var value = 0;
 
 for(var i = 0; i<12; i++){
    value = i * 12;
    for(var j = 0; j<11-i; j++){
        positions.push(value + j);
    }
 }


 
 var sum = 0;
 var count = 0;
 
 for(var i = 0; i<144; i++){
     var num = parseFloat(lines.shift());
     if(positions.indexOf(i)!=-1){
         sum += num;
         count++;
     }
 }
 
 if(operation=='S'){
     console.log(sum.toFixed(1));
 }else{
     console.log((sum/count).toFixed(1));
 }