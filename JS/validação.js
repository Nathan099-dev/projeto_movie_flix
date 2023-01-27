const formulario = document.querySelector('.formulário');
const nome = document.querySelector('#name');
const tel = document.querySelector('#telefone');
const email = document.querySelector('#email');


const btn = document.querySelector('button');

btn.addEventListener('submit', function validar(event){
    event.preventDefault()

    if (nome  == null) {
        window.alert('Campo nome, INVÁLIDO')
    }
})