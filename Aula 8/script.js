let aula08 = document.getElementById('aula08');
let ctx = canvas.getContext('2d')

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    retangulo.x = retangulo.x + 1;
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();

let circulo = {
    x: 0,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

function animacirculo(){
    circulo.desenha();
    requestAnimationFrame(animacirculo)
}
animacirculo();
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-1}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+1}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-1}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+1}  
});

addEventListener('mousemove', function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left,
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);
});

