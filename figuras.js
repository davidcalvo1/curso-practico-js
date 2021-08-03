//código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log ("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El área del cuadrado mide: " + areaCuadrado + "cm^2");

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

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriagulo) /2;
console.log ("El área del triángulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


//Código del círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log ("El radio del círculo mide: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log ("El diámetro del círculo mide: " + diametroCirculo + "cm");

//Pi
const Pi = Math.PI;
console.log ("Pi es " + Pi);

//Circunferencia
const perimetroCirculo = diametroCirculo * Pi;
console.log ("La circunferencia del círculo mide: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * Pi;
console.log ("El área del círculo mide: " + areaCirculo + "cm2");

console.groupEnd();