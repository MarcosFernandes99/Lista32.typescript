let nome : string
nome = "1Marcos123 Fernandes Junior"

ValidarNomeDeUsuario(nome)

function ValidarNomeDeUsuario(nomeParametro : string){    
    let validacao : boolean = false
    console.log("Quantidade de caracteres: " + nomeParametro.length)
    if(nomeParametro.length > 4 && nomeParametro. length < 25){
        validacao = true
    }
    else if(validacao){
        let letra : string = ""
        if(letra = nomeParametro.charAt[0]){

        }
    }
}

// EXERCICIO 1

// let frase : string
// frase = "Eu estudo na Dodev"
// let fraseQuebrada : string[]

// console.log(PalavraMaisLonga(frase))
// console.log("A maior palavra e | " + VerificarMaiorPalavra(PalavraMaisLonga(frase)))


// function PalavraMaisLonga(frase : string) : string[]{    
//     fraseQuebrada = frase.split(" ")    
//     return fraseQuebrada
// }

// function VerificarMaiorPalavra(resParametro : string[]): string{
//     let maiorPalavra : string
//     maiorPalavra = ""   
//     resParametro.forEach(x => {
//         if(x.length > maiorPalavra.length){
//             maiorPalavra = x
//         }
//     })
//     return maiorPalavra  
// }
