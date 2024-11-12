var possuiGraducao = true

if(possuiGraducao) {
    console.log(`é verdadeiro`)
} else {
    console.log(`é falso`)
}

/*

true && true; //true
true && false; //false
false && true; //false     && (E)
'gato' && 'cão'; //cão
(5 - 5) && (5 + 5); //0
'Gato' && false; //false

*/

if ((5 + 5) && (5 + 5)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

/*

true || true; // true
true || false; // true
false || false; //false
'Gato' || 'Cão'; // 'Gato'
(5 >= 5) || (3 < 6); // true

*/

var condicional = (4 >= 9) || (4 > 2) || (1 + 1)

console.log(condicional)


var corFavorita = 'Rosa';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu')
            break;
    case 'Verde':
        console.log('Olhe para o campo')
            break;
    case 'Amarelo':
        console.log('Olhe para o Sol')
            break;
    case 'Rosa':
        console.log('Olhe para as flores')
            break;
    default:
        console.log('Feche os olhos')
}


//exercicios

var minhaIdade = 21;
var idadeNamo = 21;

if(minhaIdade > idadeNamo) {
    console.log('Você é mais velho')
} else if(minhaIdade < idadeNamo)  {
    console.log('Você é mais novo')
    } else {
        console.log('Vocês tem a mesma idade')
    }