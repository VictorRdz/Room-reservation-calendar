<?php
// Obtener la fecha del servidor.

$year = date("Y");
$month = date("n");
$day = date("d");

$fecha = array("var1" => $year, "var2" => $month, "var3" => $day);
echo json_encode($fecha);

?>