function cadastro() {

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    console.log(senha)

    if (confirmaSenha != senha)
        window.alert("Sua senha está diferente! digite novamente.")

    // Validação de campos vazios
    if (nome == `` || email == `` || senha == ``) {
        alert("Por favor, preencha os campos vazios!")
    }

    // validacao do campo do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido!")
    }

//verifica tamanho da senha  
if (senha.length > 8) {
    alert("A senha exedeu os limites de caracteres (escolha uma senha com 8 caracteres)")
}

if (senha != confirma){
    alert("Suas senhas estão diferentes")
}

alert("O cadastro foi realizado com sucesso!")
}
function darkMode() {
    const pagina = document.body;
    pagina.classList.toggle("darkmode");
    const botao = document.getElementById("darkmode");
    const isDarkMode = document.body.classList.contains("darkmode");
    if (isDarkMode == true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}
