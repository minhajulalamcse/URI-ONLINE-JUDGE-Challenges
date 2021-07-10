/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1133
 * Problem Name: 1133 - Rest of a Division
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

var smallest, largest;
smallest = x;
largest = y;

if(x>y){
    smallest = y;
    largest = x;
}

for(var i = smallest+1; i<largest; i++){
    if(i%5===2 || i%5===3){
        console.log(i);
    }
}