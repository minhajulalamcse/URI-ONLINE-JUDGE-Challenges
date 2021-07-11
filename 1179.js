/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1179
 * Problem Name: 1179 - Array Fill IV
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */


var par = [];
var impar = [];

var parEnd = 0,
    imparEnd = 0;

for(var j = 0; j<15; j++){
    var num = parseInt(lines.shift());
    
    if(num%2==0){
        par[parEnd] = num;
        parEnd++
    }else{
        impar[imparEnd] = num;
        imparEnd++;
    }

    if(parEnd===5){
        for(var i = 0; i<5; i++){
            console.log('par['+i+'] = '+par[i]);
        }
        parEnd = 0;
    }
    if(imparEnd===5){
        for(var i = 0; i<5; i++){
            console.log('impar['+i+'] = '+impar[i]);
        }
        imparEnd = 0;
    }
}
for(var i = 0; i<imparEnd; i++){
    console.log('impar['+i+'] = '+impar[i]);
}

for(var i = 0; i<parEnd; i++){
    console.log('par['+i+'] = '+par[i]);
}