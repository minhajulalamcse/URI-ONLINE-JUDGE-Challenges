/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1182
 * Problem Name: 1182 - Column in Array
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var C = parseInt(lines.shift());
var operation = lines.shift();

var positions = [];
var value = C;

for(var i = 0; i<12; i++){
    if(i==0){
        value = C;
    }else{
        value += 12;
    }
    positions.push(value);
}

var sum = 0;

for(var i = 0; i<144; i++){
    var num = parseFloat(lines.shift());
    if(positions.indexOf(i)!=-1){
        sum += num;
    }
}

if(operation=='S'){
    console.log(sum.toFixed(1));
}else{
    console.log((sum/12).toFixed(1));
}