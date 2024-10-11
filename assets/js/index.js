window.onscroll = () => {
    if(scrollY > 233){
        document.querySelector('.header').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header').style.backgroundColor = 'transparent';
    }
}