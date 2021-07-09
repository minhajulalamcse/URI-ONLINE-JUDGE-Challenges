/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1043
 * Problem Name: 1043 - Triangle
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = lines.shift().split(' ').map(input=>parseFloat(input));

var copy = [];

for(var i = 0; i<arr.length; i++){
    copy[i] = arr[i];
}

for(var i = 0; i<arr.length; i++){
    for(var j = i; j<arr.length - 1; j++){
        if(arr[i]>arr[j+1]){
            temp = arr[i];
            arr[i] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

if(arr[0] + arr[1] > arr[2]){
    var perimeter = arr[0] + arr[1] + arr[2];
    console.log('Perimetro = '+perimeter.toFixed(1));
}else{
    var area = 0.5 * (copy[0] + copy[1]) * copy[2];
    console.log('Area = '+area.toFixed(1));
}

