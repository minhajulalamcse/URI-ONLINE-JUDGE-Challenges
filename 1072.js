/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1072
 * Problem Name: 1072 - Interval 2
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var inNumber = 0;
var outNumber = 0;

for(var i = 0; i<N; i++){
    var num = parseInt(lines.shift());
    if(num>=10 && num<=20){
        inNumber++;
    }else{
        outNumber++;
    }
}

console.log(inNumber+' in');
console.log(outNumber+' out');