/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1070
 * Problem Name: 1070 - Six Odd Numbers
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var num = parseInt(lines.shift());

var count = 6;
do{
    if(num%2!=0){
        console.log(num);
        num+=2;
        count--;
    }else{
        num++;
    }
}while(count)