/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1097   
 * Problem Name: 1097 - Sequence IJ 3
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var j = 7;
 for(var i = 1; i<=9; i+=2){
     console.log('I='+i+' J='+j);
     console.log('I='+i+' J='+ --j);
     console.log('I='+i+' J='+ --j);
     j = j + 4;
 }