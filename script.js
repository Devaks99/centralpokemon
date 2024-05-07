window.addEventListener('scroll', function() {
    var balao = document.getElementById('balao');
    var imageAsh = document.querySelector('.image-ash-pikachu');
    var balaoPos = balao.getBoundingClientRect();
    var imageAshPos = imageAsh.getBoundingClientRect();
    var windowTop = window.pageYOffset || document.documentElement.scrollTop;

    if (imageAshPos.top < window.innerHeight && imageAshPos.bottom >= 0) {
        var rightPosition = window.innerWidth - imageAshPos.right + 20;
        balao.style.right = (rightPosition < 0 ? 0 : rightPosition) + 'px';
    } else {
        var balaoRight = window.innerWidth - balaoPos.right;
        balao.style.right = (balaoRight < 0 ? 0 : balaoRight) + 'px';
    }
});
