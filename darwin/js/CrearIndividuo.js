	/*Individuo {x, y, vx, vy, tama�o, velocidad, tiempo de vida, descendencia}
    Cada variable puede tomar valores entre 0 y 100 (excepto x e y)
    La suma de todas las variables (excepto x e y) es igual a 100
    */

	var atributo = 1;

	var nTamano;
    var nVelocidad;
    var nVida;
    var nDescendencia;
    var nvx;
	var nvy;

	var individuo = [];
	


function crearIndividuo(listado){

	//Asignar atributos aleatorios
      nTamano = 0;
      nVelocidad = 0;
      nVida = 0;
      nDescendencia = 0;

      while( (nTamano+nVelocidad+nVida+nDescendencia) < 100 ){
        switch (atributo) {
          case 1:
            nTamano += Math.round(Math.random());
            atributo++;
            break;
          case 2:
            nVelocidad += Math.round(Math.random());
            atributo++;
            break;
          case 3:
            nVida += Math.round(Math.random());
            atributo++;
            break;
          case 4:
            nDescendencia += Math.round(Math.random());
            atributo++;
            break;
          case 5:
            atributo = 1;
            break;

        }
      }
        //Generar un vector unitario aleatorio para el movimiento
        	//Se multiplica por (Math.round(Math.random())*2-1) para que el número sea positivo o negativo aleatoriomente (lo multiplica por -1 o +1)
        nvx = Math.random() * (Math.round(Math.random())*2-1);
        nvy = Math.sqrt(1-nvx*nvx) * (Math.round(Math.random())*2-1);

        //Multiplicar las componentes del vector unitario por la velocidad
        nvx = nvx*nVelocidad;
        nvy = nvy*nVelocidad;

		//Añadir al array principal
        individuo = ({
          x:Math.round(500*Math.random()),
          y:Math.round(500*Math.random()),
          tamano: nTamano,
          velocidad: nVelocidad,
          vx: nvx,
          vy: nvy,
          vida: nVida,
		  muerte: Math.floor(Date.now()/1000) + nVida,
          descendencia: nDescendencia
        });
		
        //Actualiza el listado
        document.getElementById(listado).innerHTML += "<b>Individuo "+adan+"</b><br>"+
        "Tama&ntilde;o: "+nTamano+" <progress value=\""+nTamano+"\" max=\"100\"></progress><br>"+
        "<span style=\"color:red;\">Velocidad: "+nVelocidad+"</span> <progress value=\""+nVelocidad+"\" max=\"100\"></progress><br>"+
        "<span style=\"color:green;\">Esperanza de vida: "+nVida+"</span> <progress value=\""+nVida+"\" max=\"100\"></progress><br>"+
        "<span style=\"color:blue;\">Descendencia: "+nDescendencia+"</span> <progress value=\""+nDescendencia+"\" max=\"100\"></progress><br><br>"
		
		return individuo;
}
