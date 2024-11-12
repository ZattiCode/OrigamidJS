var pessoa = {
    nome: 'Gustavo',
    idade: '19',
    cargo: 'Analista de Sistemas',
    horario: '30 horas semanais'
}

console.log(`${pessoa.nome} ${pessoa.idade} ${pessoa.cargo} ${pessoa.horario}`);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));



var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

menu.backgroundColor = '#000';
menu.color = 'blue'

menu.esconder = function() {
    console.log('escondi')
}

var bg = menu.backgroundColor;

var carro = {
    preco: 20000,
    marca: 'Ford',
    portas: 4,
    ano: 2014,
}

console.log(`${carro.preco} ${carro.marca} ${carro.portas} ${carro.ano}`);

carro.preco = 3000;


 var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem')
            return 'latir'
        else {
            return 'nada'
        }
    }
 };

 console.log(`um cachorro ${cachorro.raca} ${cachorro.cor} de ${cachorro.idade} anos, que late ao ver um homem`);