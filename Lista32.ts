// EXERCICIO 1

// let frase : string = "Eu&&$ est%$udo n$a Dod$%ev"

// console.log("A maior palavra e | " + VerificarMaiorPalavra(frase))


// function VerificarMaiorPalavra(fraseParametro : string): string{
//     let palavras : string[] = fraseParametro.split(" ")
//     palavras.forEach((x, index) => {
//         palavras[index] = x.replace(/\W/g, "")})
//         console.log(palavras)

//     let maiorPalavra : string = ""    
//     palavras.forEach(x => {
//         if(x.length > maiorPalavra.length){
//             maiorPalavra = x
//         }
//     })
//     return maiorPalavra  
// }

// EXERCICIO 2

// let nome : string = "Marcos_2022"

// console.log(ValidarNome(nome))

// function ValidarNome(nome : string) : boolean{
//     let primeiroCaractere : RegExp = /^[a-z]/i
//     let caracateresValidos : RegExp = /\W/
//     let ultimoCaractere : RegExp = /[^_]/

//     let teste1: boolean = primeiroCaractere.test(nome)
//     let teste2: boolean = caracateresValidos.test(nome) 
//     let teste3: boolean = ultimoCaractere.test(nome)
    
//     if(nome.length >= 4 && nome.length <= 25 && teste1 && !teste2 && teste3){
//         return true
//     }
//     return false
// }

// EXERCICIO 3

let array : string[] = ["2,4,5,8,14", "2,3,5,8,14,16"]

console.log(ElementosEmComum(array))

function ElementosEmComum(array:string[]) :string{
    let elementosEmComum : string[] = []
    array[0].split(",").forEach(x => {
        if(array[1].split(",").includes(x)){
            elementosEmComum.push(x)
        }
    })
    return elementosEmComum.toString()
}
