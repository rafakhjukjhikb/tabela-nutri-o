
//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Rafaela Nutrição";

//acessar a tag tr - paciente Paulo
var pacientes =document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
 var paciente = pacientes[i];

//seleciona o conteúdo
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

//seleciona o conteuo altura a tag
var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

//calcula o imc
var imc = peso / (altura * altura);

//variáveis com valor true
var pesoValido = true;
var alturaValida = true; 

//define limites de peso e altura
if(pesoValido && alturaValida){

    //acessa e altera o imc          
    var tdimc = paciente.querySelector(".info-imc");
    tdimc.textContent = imc.toFixed(2);
}   
if(peso <= 0 || peso >= 1000){
    var pesoValido = false;
    tdimc.textContent = "peso invalida";
    paciente.classList.add("campo-invalido");
}
if(altura <=0 || altura>= 3.00){
    var alturaValida = false;
    tdimc.textContent = ("altura invalida");
    paciente.classList.add("campo-invalido");
} 

}

//quando clicar no titulo, apareça uma mensagem
titulo.addEventListener('click', motraMensagem);

function motraMensagem(){
    alert("Este elemento foi clicado");
}

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

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

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

