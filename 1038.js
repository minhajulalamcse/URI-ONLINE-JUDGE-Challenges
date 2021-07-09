/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1038
 * Problem Name: Snack
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [code, qty] = lines.shift().split(' ').map(input=>parseInt(input));

var total = 0;
var price = 0;

if(code===1){
    price = 4.00;
}else if(code === 2){
    price = 4.50;
}else if(code === 3){
    price = 5.00; 
}else if(code === 4){
    price = 2.00;
}else if(code === 5){
    price = 1.50;
}

total = price * qty;

console.log('Total: R$ '+total.toFixed(2));