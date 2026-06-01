
window.addEventListener('scroll',()=>{
document.querySelector('nav').style.background=window.scrollY>50?'rgba(0,0,0,.9)':'rgba(0,0,0,.6)';
});
