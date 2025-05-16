const numeroSecreto = Math.floor(Math.random() * 11); // número entre 0 e 10

function verificarChute() {
    const chute = parseInt(document.getElementById("userInput").value);
    const mensagem = document.getElementById("mensagem");
    const container = document.getElementById("game-container");

    if (chute === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou!";
        container.style.setProperty("background-color", "lightgreen");
    } else {
        mensagem.textContent = chute > numeroSecreto ? "Muito alto!" : "Muito baixo!";
        container.style.setProperty("background-color", "red");
    }
}
