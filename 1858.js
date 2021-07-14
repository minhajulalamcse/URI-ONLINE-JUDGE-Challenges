/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1858
 * Problem Name: 1858 - Theon's Answer
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

var arr = lines.shift().split(' ').map(input=>parseInt(input));

var position = 0;
var smallest = arr[0];

for(var i = 1; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
        position = i;
    }
}

console.log(position + 1);