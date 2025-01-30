//Capturando os quatro elementos:

const titulo = document.querySelector("#titulo");
const listaOrdenada = document.querySelector("#lista-ordenada");
const link = document.querySelector("a");
const listaDesordenada = document.querySelector("ul");

//Adicionando contaúdo textual aos elementos 'h1' e 'a':

titulo.innerText = "Manipulando elementos com o DOM";
link.innerText = "Proz Educação";

//**adicionando elementos no HTML com o DOM:**


//Adicionando três itens com links na lista ordenada:

listaOrdenada.innerHTML = `
<ol>
<li><a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1">Curso Javascript, Gustavo Guanabara</a></li>
<li><a href="https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6">Curso JavaScript do Matheus Battist</a></li>
<li><a href="https://www.youtube.com/watch?v=A6GOf1RqiwQ">Os 10 erros que cometi como dev júnior, por Augusto Galego</a></li>
</ol>`

//Adicionando três itens simples na lista não ordenada:

listaDesordenada.innerHTML = `
<ul>
<li>Aprendemos HTML </li>
<li>Aprendemos CSS</li>
<li>Aprender JavaScript</li>
</ul>`