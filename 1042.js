/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1042
 * Problem Name: Simple Sort
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = lines.shift().split(' ').map(input=>parseInt(input));

var copy = [];
for(var i = 0; i<arr.length; i++){
    copy[i] = arr[i];
}

for(var i = 0; i<arr.length; i++){
    for(var j = i; j<arr.length-1; j++){
        if(arr[i]>arr[j+1]){
            temp = arr[i];
            arr[i] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('');

for(var i = 0; i<copy.length; i++){
    console.log(copy[i]);
}