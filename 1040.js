/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1040
 * Problem Name: 1040 - Average 3
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [a, b, c, d]= lines.shift().split(' ').map(input=>parseFloat(input));

var media = (a*2 + b*3 + c*4 + d*1)/10.0;

console.log("Media: "+media.toFixed(1));

if(media>=7.0){
    console.log('Aluno aprovado.');
}else if(media<5.0){
    console.log('Aluno reprovado.');
}else{
    console.log('Aluno em exame.');
    
    var examScore = parseFloat(lines.shift());

    console.log('Nota do exame: '+examScore.toFixed(1));
    mediaFinal = (media + examScore)/2.0;
    if(mediaFinal>=5.0){
        console.log('Aluno aprovado.');
        console.log('Media final: '+mediaFinal.toFixed(1));
    }else if(mediaFinal<5.0){
        console.log('Aluno reprovado.');
        console.log('Media final: '+mediaFinal.toFixed(1));
    }
}
