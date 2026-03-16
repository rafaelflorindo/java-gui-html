/*
function verificar(){

    const resposta = document.getElementById("resposta");

    resposta.innerHTML = "O método main() é o ponto de entrada de um programa Java.";

}
*/
function carregarPagina(pagina){

    const conteudo = document.getElementById("conteudo");

    if(pagina === "introducao"){
        conteudo.innerHTML = `
            <h1>Introdução ao Java</h1>
            <p>Java é uma linguagem orientada a objetos muito utilizada no desenvolvimento de sistemas.</p>
        `;
    }

    if(pagina === "variaveis"){
        conteudo.innerHTML = `
            <h1>Variáveis em Java</h1>
            <p>Variáveis são utilizadas para armazenar valores na memória.</p>
            <pre>
int idade = 20;
String nome = "Maria";
            </pre>
        `;
    }

    if(pagina === "condicionais"){
        conteudo.innerHTML = `
            <h1>Estruturas Condicionais</h1>
            <p>Permitem tomar decisões no código.</p>
            <pre>
if(idade >= 18){
    System.out.println("Maior de idade");
}
            </pre>
        `;
    }

    if(pagina === "loops"){
        conteudo.innerHTML = `
            <h1>Estruturas de Repetição</h1>
            <p>Permitem repetir instruções.</p>
            <pre>
for(int i = 0; i < 10; i++){
    System.out.println(i);
}
            </pre>
        `;
    }

}