/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1045
 * Problem Name: 1045 - Triangle Types
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = lines.shift().split(' ').map(input=>parseFloat(input));

for(var i = 0; i<arr.length; i++){
    for(var j = i; j<arr.length-1; j++){
        if(arr[i]<arr[j+1]){
            var temp = arr[j+1];
            arr[j+1] = arr[i];
            arr[i] = temp;
        }
    }
}

var a = arr[0];
var b = arr[1];
var c = arr[2];

if(a>=b+c){
    console.log('NAO FORMA TRIANGULO');
}else{
    if(a*a == b*b + c*c){
        console.log('TRIANGULO RETANGULO');
    }
    if(a*a > b*b + c*c){
        console.log('TRIANGULO OBTUSANGULO');
    }
    if(a*a < b*b + c*c){
        console.log('TRIANGULO ACUTANGULO');
    }
    if(a == b && b == c){
        console.log('TRIANGULO EQUILATERO');
    }
    if((a==b || b==c) && (a!=b || b!=c)){
        console.log('TRIANGULO ISOSCELES');
    }
}