// EXERCICIO 1

let frase : string = "Eu&&$ est%$udo n$a Dod$%ev"

console.log("A maior palavra e | " + VerificarMaiorPalavra(frase))


function VerificarMaiorPalavra(fraseParametro : string): string{
    let palavras : string[] = fraseParametro.split(" ")
    palavras.forEach((x, index) => {
        palavras[index] = x.replace(/\W/g, "")})
        console.log(palavras)

    let maiorPalavra : string = ""    
    palavras.forEach(x => {
        if(x.length > maiorPalavra.length){
            maiorPalavra = x
        }
    })
    return maiorPalavra  
}
