/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1065
 * Problem Name: 1065 - Even Between five Numbers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var totalEvenNumber = 0;

for(var i = 0; i<5; i++){
    var num = parseInt(lines.shift());
    if(num%2==0){
        totalEvenNumber++;
    }
}

console.log(totalEvenNumber+" valores pares");