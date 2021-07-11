/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1101
 * Problem Name: 1101 - Sequence of Numbers and Sum
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

while(true){
    var [m, n] = lines.shift().split(' ').map(input=>parseInt(input));
    
    if(m<=0 || n<=0){
        break;
    }

    var smallest = m;
    var largest = n;

    if(m>n){
        smallest = n;
        largest = m;
    }
    var sum = 0;
    var output = '';
    for(var i = smallest; i<=largest; i++){
        output += i;
        output += ' ';
        sum += i;
    }
    console.log(output + 'Sum='+sum);
}