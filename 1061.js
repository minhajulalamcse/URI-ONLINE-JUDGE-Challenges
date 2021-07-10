/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1061
 * Problem Name: 1061 - Event Time
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var startDate = parseInt(lines.shift().split(' ')[1]);
var [startHour, startMinute, startSecond] = lines.shift().split(':').map(input=>parseInt(input));
var endDate = parseInt(lines.shift().split(' ')[1]);
var [endHour, endMinute, endSecond] = lines.shift().split(':').map(input=>parseInt(input));


var startDayTotalSeconds = 0;
var totalSecondsInBetween = 0;
var endDayTotalSeconds = 0;

startDayTotalSeconds = (60-startSecond) + (60-startMinute - 1) * 60 + (24-startHour - 1) * 60 * 60;
totalSecondsInBetween = (endDate - startDate - 1)*24*60*60;
endDayTotalSeconds = endSecond + endMinute * 60 + endHour * 60 * 60;

var total = startDayTotalSeconds + totalSecondsInBetween + endDayTotalSeconds;

var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

days = parseInt(total / 60 / 60 / 24);
hours = parseInt((total - (days * 24 * 60 * 60))/60/60);
minutes = parseInt((total - (days * 24 * 60 * 60) - (hours * 60 * 60))/60);
seconds = total - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

console.log(days+' dia(s)');
console.log(hours+' hora(s)');
console.log(minutes+' minuto(s)');
console.log(seconds+' segundo(s)')