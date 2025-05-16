let animation = document.getElementById('animation');
let ctx = canvas.getContext('2d')

addEventListener('mousemove', function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left,
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);
});

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'dvd.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = Math.max(bola.raio, Math.min (x_mouse, canvas.width - bola.raio));
    bola.y = Math.max(bola.raio, Math.min(y_mouse, canvas.height - bola.raio));
});