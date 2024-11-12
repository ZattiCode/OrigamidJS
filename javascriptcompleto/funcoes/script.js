function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(5));

function pi() {
    return(3.14);
}

console.log(5 * pi());

function imc(peso, altura) {
const imc = peso / (altura ** 2);
return imc;
}

imc(80, 1.80) // 2.469....
console.log(imc(8, 1.8))


function trapezio(Base, base, altura) {
    const trapezio = ((Base + base) / 2) * altura;
    return trapezio
}

trapezio(5, 3, 7) // 28 

console.log(trapezio(5, 3, 7) + 'cm²')

function calcularAreaEsfera(raio) {
    const pi = Math.PI;
    const area = 4 * pi * Math.pow(raio, 2);
    return area;
}

const raio = 7.77;
const area = calcularAreaEsfera(raio);
console.log("A área da esfera é: " + area);