document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('nav ul li a.ativo').classList.remove('ativo');
        this.classList.add('ativo');
    });
});

