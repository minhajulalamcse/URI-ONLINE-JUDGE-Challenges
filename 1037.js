/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1037
 * Problem Name: 1037 - Interval
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// [0,25] (25,50], (50,75], (75,100]. 

var num = parseFloat(lines.shift());

if(num<0 || num > 100){
    console.log('Fora de intervalo')
}else if(num>=0 && num<=25){
    console.log('Intervalo [0,25]');
}else if(num>25 && num<=50){
    console.log('Intervalo (25,50]');
}else if(num>50 && num<=75){
    console.log('Intervalo (50,75]');
}else if(num>75 && num<=100){
    console.log('Intervalo (75,100]');
}