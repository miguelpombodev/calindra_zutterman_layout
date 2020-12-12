const navActivation = () => {
    const dots = document.querySelector('.dots_mobile');
    const menu = document.querySelector('.menu');

    dots.addEventListener('click', () => {
        menu.classList.toggle('dot_activated');
    })

    console.log('foi!')
}

navActivation();