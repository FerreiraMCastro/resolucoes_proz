//Usando os conceitos aprendidos nesse módulo e sem alterar o arquivo html, adicione um
//título simples ao site com o id titulo:

let elementoTitulo = document.createElement("h1");

//inserindo um nome ao site através do InnerText e id
elementoTitulo.id = "titulo";
elementoTitulo.innerText = "Speed  Carros";

//Capturando o elemento "pai"

let body = document.querySelector("body");

//adicionando o elementoTitulo ao DOM

body.appendChild(elementoTitulo);

//Criando um elemento para o produto:

let produto = document.createElement("div");

//Manipulando o elemento
produto.innerHTML = `<div>
 <h2>Carro semi-novo</h2>
 <img src="https://c1.staticflickr.com/9/8366/8440528426_9ced77bd30_z.jpg" alt="">
 <p>Carro semi novo na cor vermelha ano 2015, único dono, direção hidraulica e cambio automático</p>
 <p id="preco-carro">Preço R$150.000,00</p>
</div>
`;

//Adicionando o elemento no DOM

body.appendChild(produto)

console.log(elementoTitulo);
