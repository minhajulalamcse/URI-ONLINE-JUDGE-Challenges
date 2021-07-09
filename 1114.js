    /*
    * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1114
    * Problem Name: 1114 - Fixed Password
    */

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    /**
     * Escreva a sua solução aqui
     * Code your solution here
     * Escriba su solución aquí
     */

    while(true){
        var password = lines.shift();
        if(password=='2002'){
            console.log('Acesso Permitido');
            break;
        }else{
            console.log('Senha Invalida')
        }
    }