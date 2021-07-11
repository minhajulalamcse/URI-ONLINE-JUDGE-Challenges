/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1118
 * Problem Name: 1118 - Several Scores with Validation
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var valid = 0;
var total = 0;
var completed = 0;

while(true){
    var num = parseFloat(lines.shift());
    if(!completed){
        if(num<0 || num>10){
            console.log('nota invalida');
        }else{
            valid++;
            total += num;
        }
        if(valid==2){
            console.log('media = '+(total/2).toFixed(2));
            console.log('novo calculo (1-sim 2-nao)');
            valid = 0;
            total = 0;
            completed = 1;
        }
    }else{
        if(num == 2){
            break;
        }else if(num == 1){
            completed = 0;
        }else{
            console.log('novo calculo (1-sim 2-nao)');
        }
    }
}