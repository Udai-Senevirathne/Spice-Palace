let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
});
fewfwfewf
wefwefwefwfwefwefw
wefwefwfwefwf
