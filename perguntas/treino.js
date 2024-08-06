document.addEventListener('DOMContentLoaded', () => {
    let x = 0;
    let y=100;

    const botao = document.getElementById('contagem');

    const malhar = document.getElementById('treino');
    
    const primoo = Image.getElementById('primo')

    malhar.addEventListener('click', () => {
        x=x+1;

        if (x==3) {
                primoo.location.href = '/GenioQuizBrau/imagens/primo2.png'
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
