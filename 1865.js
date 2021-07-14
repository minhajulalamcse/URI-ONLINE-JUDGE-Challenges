/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1865
 * Problem Name: 1865 - Mjölnir
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var T = parseInt(lines.shift());

for(var i = 0; i<T; i++){
    var [character, force] = lines.shift().split(' ').map(input => input);
    if(character=='Thor'){
        console.log('Y');
    }else{
        console.log('N');
    }
}