let nomeCadastrado = "";
        let loginCadastrado = "";
        let senhaCadastrada = "";

        // Função para cadastrar o usuário
        function cadastrar() {
            const nome = document.getElementById("nome").value;
            const login = document.getElementById("login").value;
            const senha = document.getElementById("senha").value;

            // Verifica se já existem dados cadastrados
            if (nomeCadastrado && loginCadastrado && senhaCadastrada) {
                alert("Já existe um usuário cadastrado. Limpe os dados antes de cadastrar um novo.");
                return;
            }

            // Se todos os campos foram preenchidos, faz o cadastro
            if (nome && login && senha) {
                nomeCadastrado = nome;
                loginCadastrado = login;
                senhaCadastrada = senha;
                alert("Usuário cadastrado com sucesso!");
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        }

        // Função para limpar os campos de entrada
        function limpar() {
            document.getElementById("nome").value = "";
            document.getElementById("login").value = "";
            document.getElementById("senha").value = "";

            nomeCadastrado = "";
            loginCadastrado = "";
            senhaCadastrada = "";
            document.getElementById("mensagem").textContent = "Campos limpos. Pode cadastrar novamente.";
        }

        // Função para mostrar os dados cadastrados
        function mostrarDados() {
            if (nomeCadastrado && loginCadastrado && senhaCadastrada) {
                document.getElementById("mensagem").textContent = `
                    Nome: ${nomeCadastrado}
                    Login: ${loginCadastrado}
                    Senha: ${senhaCadastrada}
                `;
            } else {
                document.getElementById("mensagem").textContent = "Nenhum dado cadastrado.";
            }
        }