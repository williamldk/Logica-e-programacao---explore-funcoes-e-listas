let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function exibirAlerta() {
    alert('Eu amo Js')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}
