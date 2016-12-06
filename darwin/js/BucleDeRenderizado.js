//BucleDeRenderizado
function loop(ctx, listado, individuos){

  //Dibuja el fondo
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,800,800);

  //Para cada individuo
  for(var i=0; i<=individuos.length-1; i++){

    //Define la forma del individuo
    ctx.beginPath();
    ctx.arc(individuos[i].x, individuos[i].y, individuos[i].tamano, 0, 2*Math.PI);

    //Define su color
    ctx.fillStyle = "rgb("+Math.round(individuos[i].velocidad*255/100)+","+Math.round(individuos[i].vida*255/100)+","+Math.round(individuos[i].descendencia*255/100)+")";

    //Muestra el individuo
    ctx.fill();
    ctx.stroke();

    //Muestra su n�mero
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.font = "20px Arial"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText(individuos[i].indice,individuos[i].x,individuos[i].y);

    //Actualiza la posici�n del individuo
    individuos[i].x += individuos[i].vx/5;
    individuos[i].y += individuos[i].vy/5;

    //Comprueba y activa colisiones con las paredes
    if(individuos[i].x>=500){
      individuos[i].x = 500;
      individuos[i].vx *= -1;
    }
    if(individuos[i].x<=0){
      individuos[i].x = 0;
      individuos[i].vx *= -1;
    }
    if(individuos[i].y>=500){
      individuos[i].y = 500;
      individuos[i].vy *= -1;
    }
    if(individuos[i].y<=0){
      individuos[i].y = 0;
      individuos[i].vy *= -1;
    }

    //Comprobar muerte
    if(individuos[i].muerte <= Math.floor(Date.now()/1000)){
      individuos.splice(i, 1);
    }
    //Reproducci�n
    for(var otroIndividuo = i+1; otroIndividuo<=individuos.length-1; otroIndividuo++){
      var distanciaCentros = Math.sqrt(Math.pow((individuos[i].x-individuos[otroIndividuo].x),2) + Math.pow((individuos[i].y-individuos[otroIndividuo].y),2));
      var distanciaReal = distanciaCentros - individuos[i].tamano - individuos[otroIndividuo].tamano;

      if(individuos[i].fertil<Math.floor(Date.now()/1000) && individuos[otroIndividuo].fertil<Math.floor(Date.now()/1000) && distanciaReal<=0){
        crearIndividuo(listado, individuos);
        individuos[i].fertil = Math.floor(Date.now()/1000) + (10-(individuos[i].descendencia)/10);
        individuos[otroIndividuo].fertil = Math.floor(Date.now()/1000) + (10-(individuos[otroIndividuo].descendencia)/10);
      }
      console.log("Distancia REAL entre individuo "+i+" e individuo "+otroIndividuo+": "+distanciaReal);
    }
  }
}
