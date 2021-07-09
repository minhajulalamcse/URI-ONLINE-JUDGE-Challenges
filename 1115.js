/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1115
 * Problem Name: 1115 - Quadrant
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

while(true){
    var coords = lines.shift();
    var [x, y] = coords.split(' ').map(input => parseInt(input));

    if(x===0 || y===0){
        break;
    }

    if(x>0 && y>0){
        console.log('primeiro');
    }else if(x<0 && y>0){
        console.log('segundo');
    }else if(x<0 && y<0){
        console.log('terceiro');
    }else if(x>0&& y<0){
        console.log('quarto');
    }
}