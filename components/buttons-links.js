const buttons = document.querySelectorAll('.button');

const links = {       
    encryp_gh: 'https://github.com/Tony2493/Challenge.git',    
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(links[button.dataset.btn])
            window.open(links[button.dataset.btn], '_blank');
    }) 
});