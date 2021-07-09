/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1066
 * Problem Name: 1066 - Even, Odd, Positive and Negative
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var totalEvenNumbers = 0;
var totalOddNumbers = 0; 
var totalPositiveNumbers = 0;
var totalNegativeNumbers = 0;

for(var i = 0; i<5; i++){
    var num = parseInt(lines.shift());
    if(num%2==0){
        totalEvenNumbers++;
    }else{
        totalOddNumbers++;
    }
    if(num>0){
        totalPositiveNumbers++;
    }else if(num<0){
        totalNegativeNumbers++;
    }
}

console.log(totalEvenNumbers+' valor(es) par(es)');
console.log(totalOddNumbers+' valor(es) impar(es)');
console.log(totalPositiveNumbers+' valor(es) positivo(s)');
console.log(totalNegativeNumbers+' valor(es) negativo(s)');