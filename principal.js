            //muda o nome a partir do seletor de classe
            var subtitulo= document.querySelector(".subtitulo");
			var titulo = document.querySelector(".titulo");
			titulo.textContent = "Rafa Nutrição";
            subtitulo.textContent = "meus pacientes";

            //acessara tag tr - paciente Paulo
            var paciente = document.querySelector(".primeiro");
           
            for(var i = 0; i < paciente.length; i++){
                 //seleciona o conteudo
            var tdpeso =paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;

            //seleciona o conteudo da altura da tag
            var tdaltura = paciente.querySelector(".info-altura");
            var altura = tdaltura.textContent;
            console.log(altura);

            // calcular imc
            var imc = peso/(altura*altura);

            // variaveis com valor true
            var pesoValido = true;
            var alturaValida = true;  

            if(pesoValido && alturaValida){
                //acessa e altera o imc
                var tdimc = paciente.querySelector(".info-imc");
               tdimc.textContent = imc;
                }

            //define limites de peso altura
            if(peso <= 0 || peso > 100){
                console.log("peso invalido");
                var pesoValido = false;
                tdimc.textContent = "peso invalido!";
    
            }
            if(altura <= 0 || altura> 300){
                console.log("altura invalida");
               var alturaValida = false;
               tdimc.textContent = "altura invalida";
            }
            }

           
            
            
            






    
