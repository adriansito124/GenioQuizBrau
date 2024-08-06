document.addEventListener('DOMContentLoaded', () => {
    let x = 0;
    let y=100;

    const botao = document.getElementById('contagem');

    const texto = document.getElementById('segredo');

    texto.addEventListener('click', () => {
        y=y-1;
        texto.textContent = y;

        if (x==y) {
            window.location.href = './43_1.html';
        }
    });

    const buttons = document.querySelectorAll('.button'); 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;  
            x=x+1;
            console.log(`Botão clicado: ${id} ${x}`);  

            if (x==80) {
                button.classList.add('warning');
            }
            if (x==81) {
                window.location.href = './derrota.html';
            }
            if (x==y) {
                window.location.href = './43_1.html';
            }
            
            botao.textContent = x;
        });
    });
});
