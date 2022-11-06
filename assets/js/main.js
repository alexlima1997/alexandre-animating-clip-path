const text = document.querySelector('.section__text')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    text.style.clipPath = `circle(${value*0.8}px at 50% 50%)`
})