function cargarFooter(){fetch("footer.html").then(t=>t.text()).then(t=>{document.getElementById("footerContainer").innerHTML=t})}cargarFooter();
