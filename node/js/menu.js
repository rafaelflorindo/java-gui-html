fetch("componentes/menu.html")
.then(resposta => resposta.text())
.then(dados => {

    document.getElementById("menu").innerHTML = dados;

    destacarPagina();

});

function destacarPagina(){

    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {

        if(link.href === window.location.href){
            link.classList.add("ativo");
        }

    });

}