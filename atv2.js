//Usando o createElement e appendChild

//ESSE MÉTODO É PARA ADICIONAR E CRIAR ELEMENTOS SIMPLES
//OU SEJA AQUELES QUE NÃO POSSUEM ELEMENTOS FILHOS
//OU QUE TEM POUCO OU NENHUM ATRIBUTO

//iniciamos chamando o objeto "Document" e usando o método dele
// .createElement() esse métdo recebe como argumento uma string
//com o nome do elemento que queremos criar.

//O nome do elemento será o mesmo que usaremos para abrir e fechar
// as tags do elemento HTML. Assim, passamos como argumento o
//valor "li":
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let elementoJavaScript = document.createElement("li");

//adicionando um texto através da propriedade innerText
elementoJavaScript.innerText = "Javascript";

//adicionando um id ao nosso elemento, usando uma propriedade
//id do elementoJavScript, e atribuir um valor a ele.

elementoJavaScript.id = "ling-js";
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//com o elemento criado, populado e manipulado, podemos 
//adiciona-lo ao nosso site.

//Para fazer isso precisamos capturar o seu elemento pai
//via DOM e salvá-lo em uma variável.

//nesse caso o elemento pai é a nossa lista não ordenada
//com a classe lista -linguagens.
//Sabendo disso iremos usar o método .querySelector
//para capturá-lo e guardalo dentro de uma variável

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//com o elemento da lista não ordenada salvo na variável
//listaLinguagens.
let listaLinguagens = document.querySelector(".lista-linguagens");

//podemos chamar essa variável e usar o método 
//appendChild() para adicionar elementos nele.

listaLinguagens.appendChild(elementoJavaScript);

//Salvando as mudanças no arquivo e voltando ao navegador, 
//devemos ver o elemento adicionado na lista do nosso site
console.log(elementoJavaScript)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Uma observação importante é que a inserção dinâmica 
// de conteúdos no nosso site, usando JavaScript,
// não altera o código fonte dos nossos arquivos HTML. 
// Se você verificar o arquivo index.html, verá que ele não foi alterado.

//USANDO AGORA O INNERHTML PARA ELEMENTOS MAIS COMPLEXOS

//Criamos o elemento <div> para a postagem e guardamos ele na variável
//postagemJavaScript:

const postagemJavaScript = document.createElement("div");


//USAMOS A PROPRIEDADE INNERHTML PARA INSERIR TODO O CONTAÚDO HTML
//DAS POSTAGENS EM UM TEMPLATE STRING

postagemJavaScript.innerHTML = `
    <h2 class="post-titulo">javaScript</h2>
    <p class="post-texto">
    JavaScript é uma linguagem de programação
    </p>`

//Nessa etapa, capturamos o elemento pai da nossa postagem
// e slavamos ele em uma variável

const postagens = document.querySelector(".postagens");

//NELE ADICIONAMOS O ELEMENTO POSTAGEMJAVASCRIPT
//ATRAVÉS  DO MÉTODO APPENDCHILD()


postagens.appendChild(postagemJavaScript);
//Salvando as mudanças no arquivo e voltando ao navegador, 
//devemos ver o elemento adicionado na lista do nosso site

console.log(postagemJavaScript)