<?php
// Obtener la fecha del servidor.

$year = date("Y");
$month = date("n");
$week = date("W");

$fecha = array("var1" => $year, "var2" => $month, "var3" => $week);
echo json_encode($fecha);

?>