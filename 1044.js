/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1044
 * Problem Name: Multiples
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [a, b] = lines.shift().split(' ').map(input=>parseInt(input));

function checkMultiple(a, b){
    return b % a == 0 ? true : false;
}

if(a>b){
    var result = checkMultiple(b, a);
}else{
    var result = checkMultiple(a, b);
}

if(result){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}