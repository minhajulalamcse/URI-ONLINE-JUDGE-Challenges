/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1050
 * Problem Name: 1050 - DDD
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = 
    {
        61: 'Brasilia',
        71: 'Salvador',
        11: 'Sao Paulo',
        21: 'Rio de Janeiro',
        32: 'Juiz de Fora',
        19: 'Campinas',
        27: 'Vitoria',
        31: 'Belo Horizonte'
    };

var code = parseInt(lines.shift());

if(arr.hasOwnProperty(code)){
    console.log(arr[code]);
}else{
    console.log('DDD nao cadastrado');
}

