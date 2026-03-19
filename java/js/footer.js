fetch("componentes/footer.html")
.then(resposta => resposta.text())
.then(dados => {

    document.getElementById("footer").innerHTML = dados;

});
