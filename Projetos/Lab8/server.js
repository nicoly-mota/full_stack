const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota principal redireciona para projects.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/projects.html'));
});

// Rota para Cadastro
app.get('/cadastra', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/cadastro.html'));
});

// Rota para Login (formulário)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Rota para processar o POST do login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sucesso = username === 'admin' && password === '1234';

  res.render('resposta', {
    usuario: username,
    status: sucesso ? 'Login bem-sucedido!' : 'Login falhou. Verifique os dados.'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
