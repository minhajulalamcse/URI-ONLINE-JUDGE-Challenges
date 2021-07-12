/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1145
 * Problem Name: 1145 - Logical Sequence 2
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [x, y] = lines.shift().split(' ').map(input=>parseInt(input));
var count = 0;
var output = '';

for(var i = 1; i<=y; i++){
    count++;
    if(count===x){
        output += i;
        console.log(output);
        output = '';
        count = 0;
    }else{
        output += i;
        output += " ";
    }
}

if(count!==0){
    console.log(output);
}