let pre = document.querySelector('.preoader-wrap')

window.addEventListener('load', function () {
    setTimeout(() => {
       pre.style.display ='none';
    }, 2);
})
let arr = document.querySelector('.arrow-up')
 arr.style.display = 'none'
window.addEventListener('scroll', function (){
    if ( scrollY> this.window.innerHeight){
        arr.style.display = 'block'
    }
    else{
        arr.style.display = 'none'

    }
})
ScrollReveal().reveal('.a-cho-ya', {
    origin:'right',
    distance:'1000px',
    reset:'true',
    delay:600,
})

ScrollReveal().reveal('.yak-tak',{
origin:'left',
distance:'1000px',
reset:'true',
 delay:600,
})
ScrollReveal().reveal('.wow animate__animated animate__flip',{
origin:'top',
distance:'100px',
reset:'true',
 delay:600,
 interval:300,
})


new WOW().init();
//button
 
