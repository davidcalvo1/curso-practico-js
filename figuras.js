//código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};

perimetroCuadrado(50); 

//console.log ("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
};

areaCuadrado(50);

//console.log ("El área del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();


//código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del tríangulo miden " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm"
);

const alturaTriagulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriagulo + "cm");

//Calcular el perímetro del triángulo con variables
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log ("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");


//Calcular el perímetro del tríangulo con una función
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}; 

perimetroTriangulo(6, 6, 4);

console.log ("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriagulo) /2;
console.log ("El área del triángulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


//Código del círculo con funciones
console.group("Círculo");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2
};

//Pi
const Pi = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
};

//Área
function areaCirculo(radio) {
    return radio * radio * Pi;
};

//Llamadas a las funciones por separado
console.log(diametroCirculo(10));
console.log(perimetroCirculo(10));
console.log(areaCirculo(10));

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  };
  
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  };