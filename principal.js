//muda o nome a partir do seletor de classe
var pacientes = document.querySelector(".subtitulo");
			pacientes.textContent = "Meus Pacientes";
			var nutrição = document.querySelector(".titulo");
			nutrição.textContent = "Rafa Nutrição";
//acessara tag tr
            var paciente = document.querySelector("#primeiro-paciente");
            console.log(paciente);
            //seleciona o conteudo
            var tdpeso =paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;

            //seleciona o conteudo da altura da tag
            var tdaltura = paciente.querySelector(".info-altura");
            var altura = tdaltura.textContent;
            console.log(altura);

            var imc = peso/(altura*altura);

            //acessa e altera o imc
            var tdimc = paciente.querySelector(".info-imc");
            tdimc.textContent = imc;
            
            if(peso< 0 || peso > 100){
                alert("peso invalido");
            }
            if(altura < o || altura> 300){
                alert("altura invalida");
            }
            






    
