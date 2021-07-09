/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1064
 * Problem Name: 1064 - Positives and Average
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var total = 0;
var totalPositiveNumber = 0;

for(var i = 0; i<6; i++){
    var num = parseFloat(lines.shift());
    if(num>0){
        totalPositiveNumber++;
        total+=num;
    }
}
console.log(totalPositiveNumber+' valores positivos');
console.log((total/totalPositiveNumber).toFixed(1));