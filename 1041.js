/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1041
 * Problem Name: 1041 - Coordinates of a Point
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [x, y] = lines.shift().split(' ').map(input=> parseFloat(input));

if(x===0.0 && y===0.0){
    console.log('Origem');
}else if(y===0.0){
    console.log('Eixo X');
}else if(x===0.0){
    console.log('Eixo Y');
}else if(x>0 &&  y>0){
    console.log('Q1');
}else if(x<0 && y>0){
    console.log('Q2');
}else if(x<0 && y<0){
    console.log('Q3');
}else if(x>0 && y<0){
    console.log('Q4');
}