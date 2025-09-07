class naja{

nome : string; 

tamanho : number;

ameaca : string;

cor : string;



constructor (nome : string){

  this.nome = nome;

  this.tamanho = 3.2;

  this.ameaca = "Veneno neurotóxico";

  this.cor = "Verde";

  }
}

const cobra = new naja ("Naja");

console.log("---- Informações ----");
console.log(`O animal que possui a mesma inicial que o meu é a cobra: ${cobra.nome}.`);
console.log(`A cor da ${cobra.nome} geralmente é: ${cobra.cor}`);
console.log(`Tem um tamanho de ${cobra.tamanho}M.`);
console.log(`Sua grande ameaça é seu, ${cobra.ameaca}.`);
