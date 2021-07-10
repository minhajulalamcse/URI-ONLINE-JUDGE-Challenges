/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1046
 * Problem Name: 1046 - Game Time
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [startTime, endTime ] = lines.shift().split(' ').map(input=>parseInt(input));

var totalTime = 0;

if(startTime>=endTime){
    var totalTime = (24 - startTime) + endTime;
}else{
    var totalTime = endTime - startTime;
}

console.log("O JOGO DUROU "+ totalTime +" HORA(S)");