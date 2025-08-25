const notas = [5.5, 6.7, 10];

function gmedia (notas){
    let soma = 0;
        for(nota of notas){
            soma += nota;

        }
    let media = soma /notas.length;
	return media;
}

let medi = gmedia (notas); // chama funcao


console.log (medi.toFixed(2)); // imprimir 