//responsiv menu = html css js
const mobileMenu = () =>{
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

        if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';

        }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';

        }
}
//ovo je galerija

let rightBtn = document.querySelector('#right-btn');
let LeftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

rightBtn.addEventListener('click', () =>{
    displayNone();
    imgNum++;

    if(imgNum === pictures.length){
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
});
LeftBtn.addEventListener('click', () => {
    displayNone();
    imgNum--;

    if( imgNum === -1){
        imgNum = pictures.length -1;
    }
    pictures[imgNum].style.display = 'block';
});



const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    }) 
}
//izlistavanje slika u slajderu

//portfolio- logika za selektovanje restorana hotela korporacija
const portfolioSort = (button) =>{
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) =>{
        item.style.display = 'none';
    });

    if(category ==='sve'){
        portfolioItems.forEach((item) =>{
            item.style.display = 'block';
        });
    }
    portfolioItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}

//dugme modal buton

const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
}
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
}