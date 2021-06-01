//var nome = window.prompt('Qual é o seu nome? ')
//window.alert('Seja bem vindo, ' + nome + '!')

document.querySelector('.hamburguer').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu')
})

