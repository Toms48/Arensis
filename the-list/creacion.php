<html>
<head><title>La lista</title></head>
<body>
<h1><p align="center">Creaci&oacute;n de lista</p></h1>
<form action=creacion_.php method="post">
<p align="center">N&uacute;mero: <input type="text" name="numero"></p>
<p align="center">Valor: <input type="text" name="valor"></p>
<p align="center">
Concepto: 
<input list="concepto" name="concepto">
  <datalist id="concepto">
    <option value="Fragmento1">
    <option value="Fragmento2">
    <option value="Asignacion">
  </datalist>
</p> 
<p align="center"><input type="submit"></p>
</form>
<p align="center"><font color="FF0000"><b>
<?php
if($_GET['c']){
printf("Creado n&uacutemero: ");
printf($_GET['n']);
printf("<br>con valor: ");
printf($_GET['v']);
printf("<br>y concepto: ");
printf($_GET['c']);
}
?>
</font>
</p>
</body>
</html>