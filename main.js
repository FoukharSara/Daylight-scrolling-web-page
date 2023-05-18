let moon=document.getElementById("moon");
let stars=document.getElementById("stars");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let mountains7=document.getElementById("mountains7");
let nouvil=document.querySelector(".nouvil")

window.addEventListener("scroll",function(){
    let value=scrollY;
    moon.style.top=value * 2 + 'px';
    stars.style.left=value+'px';
    mountains3.style.top=value + 'px';
    mountains4.style.top=value + 'px';
    river.style.top=value + 'px';
    boat.style.top=value + 'px';
    boat.style.left=value + 'px';
    nouvil.style.fontSize=value + 'px';
    if(scrollY>=67){
        nouvil.style.fontSize=67+'px';
        nouvil.style.position='fixed';
        if(scrollY>=394){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';
        }
    }
})
