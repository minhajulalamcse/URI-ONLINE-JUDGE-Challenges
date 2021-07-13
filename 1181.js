/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1181
 * Problem Name: 1181 - Line in Array
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var targetRow = parseInt(lines.shift());
var operation = lines.shift();
var targetedValueStart = targetRow * 12 ;
var targetedValueEnd = (targetRow + 1) * 12;
var sum = 0;

for(var i = 0; i<144; i++){
    var num = parseFloat(lines.shift());
    if(i>=targetedValueStart && i<targetedValueEnd){
        sum += num;
    }
}
if(operation=='S'){
    console.log(sum.toFixed(1));
}else{
    console.log((sum/12).toFixed(1));
}