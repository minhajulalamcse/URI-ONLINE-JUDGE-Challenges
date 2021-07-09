/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1074
 * Problem Name: 1074 - Even or Odd
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var N = parseInt(lines.shift());

for(var i = 0; i<N; i++){
    
    var num = parseInt(lines.shift());
    
    var output = '';

    if(num===0){
        output += 'NULL';
    }else{
        if(num%2===0){
            output += 'EVEN';
        }else{
            output += 'ODD';
        }

        if(num>0){
            output += " POSITIVE";
        }else{
            output += " NEGATIVE";
        }
    }
    console.log(output);
}