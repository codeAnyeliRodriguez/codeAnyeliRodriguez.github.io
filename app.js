window.addEventListener("load",function(){var e=document.getElementById("loader");setTimeout(function(){e.style.display="none"},1e3)});var check=document.querySelector(".check");function idioma(){!0==check.checked?location.href="es/index.html":location.href="../index.html"}check.addEventListener("click",idioma),$(document).ready(main);var contador=1;function main(){$(".menu_bar").click(function(){1==contador?($("nav").animate({left:"0"}),contador=0):(contador=1,$("nav").animate({left:"-100%"}))})}const maquina1=document.getElementById("maquina-escribir1"),maquina3=document.getElementById("maquina-escribir3"),maquinaescribir1=(e="",i=200,a="")=>{let n=e.split("");a.innerHTML="";let t=0,r=setInterval(function(){a.innerHTML+=n[t],++t===n.length&&clearInterval(r)},i)};window.onload=function(){maquinaescribir1("Hello World! I'm Anyeli Rodr\xedguez Developer. This is my portfolio where several of my projects will be, both mini games and utilities and more, I hope you like them.",25,maquina1)};const desplazarArriba=document.querySelector("#desplazarse-hacia-arriba");function mostrarTitulo(e){alert(e.getAttribute("title"))}desplazarArriba.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});