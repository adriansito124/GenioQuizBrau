document.querySelectorAll('.parede').forEach(function(parede) {
    parede.addEventListener('mouseover', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});

document.querySelector('.meta').addEventListener('mouseover', function() {
    const url = this.getAttribute('data-url');
    window.location.href = url;
});


