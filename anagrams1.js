const button = document.getElementById("findButton")
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value

    let arrayAnagramas = getAnagramsOf(typedText)
    
    console.log(arrayAnagramas) 

    contrutorHTML(arrayAnagramas)

    return arrayAnagramas
});
  
function getAnagramsOf(input) {
    let inputOrdenado = input.split('').sort().join('').trim()
    let arrayPalavrasAnagrama = []

    for (let palavraOrdenada of words) {
        let palavraComparadaOrdenada = palavraOrdenada.split('').sort().join('').trim()
        
        if (palavraComparadaOrdenada === inputOrdenado) {
            arrayPalavrasAnagrama.push(palavraOrdenada)
        }
    }

    if (arrayPalavrasAnagrama.length === 0) {
        arrayPalavrasAnagrama.push('Nenhum')
    }

    return arrayPalavrasAnagrama
}

const secao = document.getElementsByTagName('section')[0]
const blocoResultado = document.createElement('div')
blocoResultado.classList.add('blocoResultado')

function contrutorHTML(arrayPalavras) {
    secao.appendChild(blocoResultado)

    blocoResultado.innerText = ''

    const blocoResultadoTexto = document.createElement('p')
    blocoResultadoTexto.classList.add('blocoResultado__texto')
    blocoResultado.appendChild(blocoResultadoTexto)
    blocoResultadoTexto.innerHTML = `O resultado encontrado é: <br/> <span>${arrayPalavras}</span>`
}