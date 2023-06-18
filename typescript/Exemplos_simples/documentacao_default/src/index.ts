import { Fishing } from "./class/fishing"
interface Teste {
    name: string,
    age: number
}

const pessoa: Teste = {
    name: "Erick",
    age: 22
}

const fishing = new Fishing("Tilapia","Brasil").display();

console.log(fishing);
console.log(pessoa);