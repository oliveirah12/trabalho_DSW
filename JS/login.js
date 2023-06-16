
const usuarioSimulado = {
    username: "meuusuario",
    senha: "minhasenha"
  };
  
  function verificarLogin() {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
  
    if (username === usuarioSimulado.username && senha === usuarioSimulado.senha) {
      // Login bem-sucedido
      alert("Login realizado com sucesso!");
      window.location.href = "/menu_config.html";
    } else {
      // Credenciais inválidas
      alert("Usuário ou senha incorretos. Tente novamente.");
    }
  }
  
  // Adicionar evento de clique ao botão de login
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener('click', verificarLogin);
  