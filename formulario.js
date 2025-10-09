//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");


//executa os codigos ao clicar no botao
botaoAdicionar.addEventListener('click',function(event){
event.preventDefault();

//acessa o formulario
var formulario = document.querySelector("#form-adiciona");

//captura os os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//cria as <tag>
var pacienteTr = document.createElement("tr");

//cria as tgs <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");
 
//aiciona os valores
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularImc(peso, altura);

//adicionar as tags na tela do usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

//variavel para acessar Tdbody e criar a tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

});
