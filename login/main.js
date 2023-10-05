const form = document.querySelector('.login-form')
const emailInput = form.querySelector("input[type='email']");
const telefoneInput = form.querySelector("input[type='tel']");
const usuarioInput = form.querySelector("input[type='text']")
const senhaInput = form.querySelector("input[type='password']")




form.addEventListener('submit', (event) => {
    // Adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    // Obtém os valores dos campos de entrada do usuário e senha

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();
    const email = emailInput.value.trim(); // Novo campo de email
    const telefone = telefoneInput.value.trim(); // Novo campo de telefone
    
    if (usuario === '' || senha === '' || email === '' || telefone === '') {
        alert("Por favor preencha todos os campos");
    } else if (usuario === 'usuario' && senha === 'senha') {
        // Verifica se as informações de login e senha estão corretas
        alert("Bem-vindo!");
        location.replace("/tarefas/index.html", "_self");
    } else {
        // Exibe uma mensagem de erro se as informações estiverem incorretas
        alert("Usuário ou senha incorretos, tente novamente");
    }
})