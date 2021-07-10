/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1049
 * Problem Name: 1049 - Animal
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var firstWord = lines.shift();
var secondWord = lines.shift();
var thirdWord = lines.shift();

var animal = 
    {
        'vertebrado' : {
            'ave' : {
                'carnivoro' : 'aguia',
                'onivoro' : 'pomba'
            },
            'mamifero' : {
                'onivoro' : 'homem',
                'herbivoro' : 'vaca'
            }
        },
        'invertebrado' : {
            'inseto' : {
                'hematofago' : 'pulga',
                'herbivoro' : 'lagarta'
            },
            'anelideo' : {
                'hematofago' : 'sanguessuga',
                'onivoro' : 'minhoca'
            }
        }
    };

console.log(animal[firstWord][secondWord][thirdWord]);