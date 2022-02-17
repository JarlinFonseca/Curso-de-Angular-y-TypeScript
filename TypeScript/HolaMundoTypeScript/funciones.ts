//let saludo:string = 'HolaMundo desde TypeScript';
let saludo = 'HolaMundo desde TypeScript';

saludo = "cambio";

let numero:number = 10;

let cualquiera:any;
cualquiera = "cadena";
cualquiera = 10;

const PI_NUMERO = 3.1416;

const saludar =  () => {
    console.log(saludo); 
    console.log(numero) 
    console.log(cualquiera); 
    console.log(PI_NUMERO)
}

saludar();