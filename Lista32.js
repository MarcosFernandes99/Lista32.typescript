// EXERCICIO 1
var frase = "Eu&&$ est%$udo n$a Dod$%ev";
console.log("A maior palavra e | " + VerificarMaiorPalavra(frase));
function VerificarMaiorPalavra(fraseParametro) {
    var palavras = fraseParametro.split(" ");
    palavras.forEach(function (x, index) {
        palavras[index] = x.replace(/\W/g, "");
    });
    console.log(palavras);
    var maiorPalavra = "";
    palavras.forEach(function (x) {
        if (x.length > maiorPalavra.length) {
            maiorPalavra = x;
        }
    });
    return maiorPalavra;
}
