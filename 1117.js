/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1117
 * Problem Name: 1117 - Score Validation
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var count = 0;
var media = 0;
var total = 0;
while(true){
    var num = parseFloat(lines.shift());
    if(num>=0 && num<=10){
        total += num;
        count++;
        if(count===2){
            media = total/2;
            console.log('media = '+media.toFixed(2));
            break;
        }
    }else{
        console.log('nota invalida');
    }
}