// Scroll fill color
window.onscroll = () => {
    if(scrollY > 190){
        document.querySelector('.header').style.backgroundColor = '#1b1514e7';
    } else if (scrollY === 0){
        document.querySelector('.header').style.backgroundColor = 'transparent';
    }
}