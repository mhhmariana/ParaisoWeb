
<?php
session_start(); // Iniciar la sesión
session_unset(); // Liberar todas las variables de sesión
session_destroy(); // Destruir la sesión

header("Location: index.html"); // Redirigir a la página de inicio
exit();
?>
