const nome_usuario = document.getElementById('nome');
const email_usuario = document.getElementById('email');
const telefone_usuario = document.getElementById('telefone');
const btn = document.querySelector('button');

btn.addEventListener('click', function cadastrar(){
    if (nome_usuario.value == '') {
        window.alert('Campo inválido');
        nome_usuario.style.borderColor = 'red';

    }else  if (email_usuario.value == '') {
        window.alert('Campo inválido')
        email_usuario.style.borderColor = 'red';
        
    }else if (email_usuario.indexOf('@'). value == -1 || email_usuario.indexOf('.').value == -1) {
        window.alert('E-mail inválido');
        email_usuario.style.borderColor = 'red'
    }
})

