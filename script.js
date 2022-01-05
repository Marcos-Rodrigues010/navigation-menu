function activateMenuItem(n){
    document.querySelector('.menuArea__link--active').classList.remove('menuArea__link--active');
    document.querySelector('.menuArea__desc--active').classList.remove('menuArea__desc--active');
    document.querySelector('.menuArea__list').children[n].children[0].classList.add('menuArea__link--active');
    document.querySelector('.menuArea__list').children[n].children[1].classList.add('menuArea__desc--active');
    document.querySelector('.menuArea__ball').style.left = n * 80 + 'px';
}