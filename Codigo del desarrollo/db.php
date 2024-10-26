
<?php
$conn = new mysqli(host="localhost",user="root",passwd="nico1607",db="mi_base_de_datos");

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
