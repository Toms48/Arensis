<html>
<body>
<?php
include("opciones.php");

  $n = $_POST['numero'];
  $v = $_POST['valor'];
  $c = $_POST['concepto'];
  
 
  if (!($enlace=mysql_connect($mysql_host,$mysql_user,$mysql_password, $mysql_database))) { 
         printf("Error conectando a la base de datos.");
         exit(); 
        } 
 else{
        if (!mysql_select_db($mysql_database,$enlace)) { 
         printf("Error seleccionando la base de datos.");
         exit(); 
        } 
		
		else{

				mysql_query("INSERT INTO lalista (numero, valor, concepto)
				VALUES ('$n','$v', '$c')", $enlace);
				header("Location: creacion.php?n=$n&v=$v&c=$c");
			
	}
	}
	
	
  mysql_close($enlace); 
?>
</body>
</html>