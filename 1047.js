/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1047
 * Problem Name: 1047 - Game Time with Minutes
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [startHour, startMinute, endHour, endMinute] = lines.shift().split(' ').map(input=> parseInt(input));

var totalHour = 0;
var totalMinute = 0;

if(startHour == endHour && startMinute >= endMinute){
    totalHour += 24 - startHour - 1;
    totalHour += endHour;

    totalMinute += 60 - startMinute;
    totalMinute += endMinute;
}else if(startHour == endHour && endMinute > startMinute){
    totalMinute += endMinute - startMinute;
}else if(endHour > startHour){
    totalHour += endHour - startHour - 1;

    totalMinute += 60 - startMinute;
    totalMinute += endMinute;
}else if(startHour > endHour){
    totalHour += 24 - startHour - 1;
    totalHour += endHour;

    totalMinute += 60 - startMinute;
    totalMinute += endMinute
}

totalMinute += totalHour * 60;

console.log('O JOGO DUROU '+parseInt(totalMinute/60)+' HORA(S) E '+(totalMinute%60)+' MINUTO(S)');