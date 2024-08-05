
document.addEventListener('DOMContentLoaded', () => {
    const pairs = {
        tufa: 'piper',
        toodyxz: 'dinamyke',
        pitbullfera: 'willow',
        vtzim: 'rico',
        adrian: 'mr_p'  
    };

    let selected = [];

    const buttons = document.querySelectorAll('.button-likii, .buttton'); 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;
            console.log(`Botão clicado: ${id}`);  

            if (selected.length < 2 && !button.classList.contains('selected')) {
                button.classList.add('selected');
                selected.push(id);
            }

            if (selected.length == 2) {
                const [first, second] = selected;
                console.log(`Selecionados: ${first}, ${second}`);  

                if (pairs[first] == second || pairs[second] == first) {
                    console.log('Par correto');  
                    selected = [];
                    if (document.querySelectorAll('.selected').length == 10) {
                        window.location.href = './42.html';
                    }
                } else {
                    console.log('Par incorreto');  
                    window.location.href = './derrota.html';
                }
            }
        });
    });
});
