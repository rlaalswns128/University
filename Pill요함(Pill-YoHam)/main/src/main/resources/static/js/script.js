window.onload = function() {
    let buttons = document.querySelectorAll('.underline-btn');
    buttons.forEach(btn => {
        btn.style.opacity = 0;
        setTimeout(() => {
            btn.style.transition = 'opacity 1s ease-in';
            btn.style.opacity = 1;
        }, 200);
    });
};