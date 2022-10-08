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
var nome = "Marcos_2022";
console.log(ValidarNome(nome));
function ValidarNome(nome) {
    var primeiroCaractere = /^[a-z]/i;
    var caracateresValidos = /\W/;
    var ultimoCaractere = /[^_]/;
    var teste1 = primeiroCaractere.test(nome);
    var teste2 = caracateresValidos.test(nome);
    var teste3 = ultimoCaractere.test(nome);
    if (nome.length >= 4 && nome.length <= 25 && teste1 && !teste2 && teste3) {
        return true;
    }
    return false;
}
