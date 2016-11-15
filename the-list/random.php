<?php
include("opciones.php");

  $f1 = rand(0,330);
  $f2 = rand(0,330);
  $a = rand(0,330);
  $f1_;
  $f2_;
  $a_;
  $f1_2;
  $f2_2;
  $a_2;
  

  
  if (!($enlace=mysql_connect($mysql_host,$mysql_user,$mysql_password))) { 
         echo "Error conectando a la base de datos."; 
         exit(); 
        } 
        if (!mysql_select_db($mysql_database,$enlace)) { 
         echo "Error seleccionando la base de datos."; 
         exit(); 
        }
		
  $f1_=mysql_fetch_array(mysql_query("SELECT * FROM lalista WHERE numero='$f1' AND concepto='Fragmento1'", $enlace));
  $f2_=mysql_fetch_array(mysql_query("SELECT * FROM lalista WHERE numero='$f2' AND concepto='Fragmento2'", $enlace));
  $a_=mysql_fetch_array(mysql_query("SELECT * FROM lalista WHERE numero='$a' AND concepto='Asignacion'", $enlace));
  mysql_close($enlace);
  
  printf($f1_['valor']);
  printf("<br>");
  printf($f2_['valor']);
  printf("<br>");
  printf($a_['valor']);
  $f1_2=$f1_['valor'];
  $f2_2=$f2_['valor'];
  $a_2=$a_['valor'];
  header("Location: index.php?f1=$f1_2&f2=$f2_2&a=$a_2");
?>