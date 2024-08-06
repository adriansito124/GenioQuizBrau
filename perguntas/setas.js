let posX = 50; // posição inicial no eixo X em porcentagem
let posY = 50; // posição inicial no eixo Y em porcentagem

function move(direction) {
    const step = 5; // passo de movimento em porcentagem

    switch (direction) {
        case 'up':
            posY = Math.max(0, posY - step);
            break;
        case 'down':
            posY = Math.min(100, posY + step);
            break;
        case 'left':
            posX = Math.max(0, posX - step);
            break;
        case 'right':
            posX = Math.min(100, posX + step);
            break;
    }

    const boneco = document.getElementById('boneco');
    boneco.style.top = posY + '%';
    boneco.style.left = posX + '%';
}
