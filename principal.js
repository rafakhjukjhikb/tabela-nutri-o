//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var Rafaela = document.querySelector(".titulo");
Rafaela.textContent = "Rafaela Nutrição";

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
    paciente.style.backgroundColor="red";
}
if(altura <=0 || altura>= 3.00){
    var alturaValida = false;
tdimc.textContent = ("altura invalida");
} 

}



            