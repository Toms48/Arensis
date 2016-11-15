<html>
<head><title>La lista</title></head>
<body background="./img/fondo.jpg">
<audio autoplay loop>
  <source src="audio/audio.mp3" type="audio/mpeg">
Tu navegador no admite audio HTML5.
</audio>
<style>
p{
	color: #FFFFFF;
	margin-left: auto;
    margin-right: auto;
    width: 70%;
	text-align: center;
}

p span{
    background-color: #000000;
}

h1{
	color: #FFFFFF;
	margin-left: auto;
    margin-right: auto;
    width: 70%;
	text-align: center;
}

h1 span{
    background-color: #000000;
}

h6{
	color: #FFFFFF;
	margin-left: auto;
    margin-right: auto;
    width: 70%;
	text-align: center;
}

h6 span{
    background-color: #000000;
}

img.final{
    position: absolute;
    bottom: 0px;
	left: 0px;
}
</style>
<h1><span>La lista</span></h1>
<p><span>
<i><u>La lista</u></i> es un programa creado por la CIA y la NASA, en colaboraci&oacute;n con asociaciones reptilianas e illuminatis, que dice lo que cada persona es en funci&oacute;n de los n&uacute;meros que el sujeto introduzca.<br><i><u>La lista</u></i> es parte de un experimento cient&iacute;fico para dominar la humanidad mediante la identificaci&oacute;n del car&aacute;cter humano basado en c&aacute;lculos num&eacute;ricos.
</span></p>
<h6><span>(N&oacute;tese que la mayor&iacute;a de palabras de la tercera categor&iacute;a no han de tomarse como de g&eacute;nero masculino o femenino, sino como de g&eacute;nero neutro)</span></h6>
<form action="lectura.php">
<p><span>Para obtener un resultado, introduce un n&uacute;mero desde el 0 hasta el n&uacute;mero l&iacute;mite que indique cada cuadro y haz click "Enviar" o presiona enter.<br>Tambi&eacute;n se puede introducir cifras solo en los dos primeros cuadros, si as&iacute; se prefiere.</span></p>
<p><span>
Fragmento 1: <input type="text" name="f1" placeholder="M&aacute;ximo: 330"><br>
Fragmento 2: <input type="text" name="f2" placeholder="M&aacute;ximo: 330"><br>
Asignaci&oacute;n o cualidad especial: <input type="text" name="a" placeholder="M&aacute;ximo: 330"><br><br>
<input type="submit"><br>
</span></p>
</form>
<form action="random.php">
<p>
<input type="submit" value="&iexcl;Ayuda! No tengo capacidad de decisi&oacute;n">
</p>
</form>
<b>
<p><span>
<?php
if($_GET['f1']){
printf("La coalici&oacute;n reptiliano-illuminati ya ha alertado a la CIA y a la NASA de que usted es un: <br><br><font style=\"text-transform: uppercase;\">");
printf($_GET['f1']);
printf($_GET['f2']);
printf(" ");
printf($_GET['a']);
}
?>
</font>
</span>
</p>
</b>
<a href="https://twitter.com/thelist_tk" target="_blank"><img src="./img/tuister.jpg" class="final"></a>
</body>
</html>