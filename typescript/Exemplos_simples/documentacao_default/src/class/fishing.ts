export class Fishing {
    name: string;
    coutry: string;

    constructor(name: string, coutry: string) {
        this.coutry = coutry;
        this.name = name;
    }

    display(){
       return `Name: ${this.name}, Coutry: ${this.coutry}`;
    }
}