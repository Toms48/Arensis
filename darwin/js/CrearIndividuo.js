	/*
	Prototipo de objeto individuo {x, y, tamano, velocidad, vx, vy, vida, muerte, descendencia, indice, fertil}
    Las variables tamano, velocidad, vida y descendencia.
    La suma de esas variables es igual a 100
    */
function crearIndividuo(listado, numero , padre, madre){
	
	var atributo = 1;

	var nuevoTamano;
    var nuevoVelocidad;
    var nuevoVida;
    var nuevoDescendencia;
    var nuevoVx;
	var nuevoVy;

	numero.individuos++;
	
	//Aumenta el número de individuos
	
	
	//Si el individuo no tiene padres
	if (padre==undefined || madre==undefined){
	  //Asignar atributos aleatorios
      nuevoTamano = 0;
      nuevoVelocidad = 0;
      nuevoVida = 0;
      nuevoDescendencia = 0;
	  
      while( (nuevoTamano+nuevoVelocidad+nuevoVida+nuevoDescendencia) < 100 ){
        switch (atributo) {
          case 1:
            nuevoTamano += Math.round(Math.random());
            atributo++;
            break;
          case 2:
            nuevoVelocidad += Math.round(Math.random());
            atributo++;
            break;
          case 3:
            nuevoVida += Math.round(Math.random());
            atributo++;
            break;
          case 4:
            nuevoDescendencia += Math.round(Math.random());
            atributo++;
            break;
          case 5:
            atributo = 1;
            break;

        }
      }
	  
	}
	//Si_no
	else{
		//Asignar atributos a partir de los padres
		
	}
	
	//Generar un vector unitario aleatorio para el movimiento
		//Se multiplica por (Math.round(Math.random())*2-1) para que el número sea positivo o negativo aleatoriomente (lo multiplica por -1 o +1)
	nuevoVx = Math.random() * (Math.round(Math.random())*2-1);
	nuevoVy = Math.sqrt(1-nuevoVx*nuevoVx) * (Math.round(Math.random())*2-1);

	//Multiplicar las componentes del vector unitario por la velocidad
	nuevoVx = nuevoVx*nuevoVelocidad;
	nuevoVy = nuevoVy*nuevoVelocidad;

	//Crear objeto individuo
	individuo = {
	  x:Math.round(500*Math.random()),
	  y:Math.round(500*Math.random()),
	  tamano: nuevoTamano,
	  velocidad: nuevoVelocidad,
	  vx: nuevoVx,
	  vy: nuevoVy,
	  vida: nuevoVida,
	  muerte: Math.floor(Date.now()/1000) + nuevoVida,
	  descendencia: nuevoDescendencia,
	  indice: numero.individuos,
	  fertil: 0
	};
	
	//Actualiza el listado
	document.getElementById(listado).innerHTML += "<b>Individuo "+numero.individuos+"</b><br>"+
	"Tama&ntilde;o: "+nuevoTamano+" <progress value=\""+nuevoTamano+"\" max=\"100\"></progress><br>"+
	"<span style=\"color:red;\">Velocidad: "+nuevoVelocidad+"</span> <progress value=\""+nuevoVelocidad+"\" max=\"100\"></progress><br>"+
	"<span style=\"color:green;\">Esperanza de vida: "+nuevoVida+"</span> <progress value=\""+nuevoVida+"\" max=\"100\"></progress><br>"+
	"<span style=\"color:blue;\">Descendencia: "+nuevoDescendencia+"</span> <progress value=\""+nuevoDescendencia+"\" max=\"100\"></progress><br><br>"
	
	return individuo;
}

	CrearIndividuo
	
	PSEUDOCÓDIGO GENERALIZADO
	inicio
		Aumenta el número de individuos
		Si el individuop no tiene padres
			Asignar atributos aleatorios
		fin_si
		Si_no
			Asignar atributos a partir de los padres
		fin_si_no
		
		Generar un vector unitario aleatorio para el movimiento
		Multiplicar las componentes del vector unitario por la velocidad
		Crear objeto individuo
		Actualiza el listado		
	fin
	