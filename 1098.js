/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1098
 * Problem Name: 1098 - Sequence IJ 4
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var i = 0;
 var j1 = 1;
 var j2 = 2;
 var j3 = 3;

 for(var m = 0; m<11; m++){
    console.log('I='+parseFloat(i.toFixed(1))+' J='+ parseFloat(j1.toFixed(1)));
    console.log('I='+parseFloat(i.toFixed(1))+' J='+ parseFloat(j2.toFixed(1)));
    console.log('I='+parseFloat(i.toFixed(1))+' J='+ parseFloat(j3.toFixed(1)));
    i += 0.2;
    j1 += 0.2;
    j2 += 0.2;
    j3 += 0.2;
 }