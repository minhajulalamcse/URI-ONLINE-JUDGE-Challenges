/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1160
 * Problem Name: 1160 - Population Increase
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

    var [PA, PB, GA, GB] = lines.shift().split(' ').map(input=>input);

    PA = parseInt(PA);
    PB = parseInt(PB);
    GA = parseFloat(GA);
    GB = parseFloat(GB);

    var year = 1;
    var completed = false;
    while(year<=100){
        PA += parseInt(PA * (GA/100));
        PB += parseInt(PB * (GB/100));

        if(PA>PB){
            completed = true;
            break;
        }
        year++;
    }

    if(!completed){
        console.log('Mais de 1 seculo.')
    }else{
        console.log(year+' anos.');
    }
}