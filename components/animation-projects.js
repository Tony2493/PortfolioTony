const images = document.querySelectorAll('.cards__item-img img');
const cards = document.querySelectorAll('.cards__item-img');

const sources = {
    
    encrypting: {
        img: './assets/img/encriptador.png'
        gif: './assets/img/encriptador.gif'
    },
    
};

cards.forEach((card)=> {
    card.addEventListener('mouseover', (e) => {
        e.target.src = sources[e.target.dataset.gif]['gif'];
    });
    card.addEventListener('mouseout', (e) => {
        e.target.src = sources[e.target.dataset.gif]['img'];
    });
})