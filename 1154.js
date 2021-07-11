/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1154
 * Problem Name: 1154 - Ages
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var media = 0;
var totalAge = 0;
var count = 0;

while(true){
    var age = parseInt(lines.shift());
    
    if(age<0){
        break;
    }

    totalAge += age;
    count++;
}

media = totalAge/count;

console.log(media.toFixed(2));