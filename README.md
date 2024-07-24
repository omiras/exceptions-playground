# Ejercicios sobre la gestión de errores y excepciones

## ex1.js

Ejecuta `node ex1.js`

El script lee de forma adecuada un fichero JSON y muestra el nombre y email del fichero _people1.json_. Sin embargo, si intentamos cargar _people1_bad.json_ va a fallar estrepitosmanete porque está mal formado el JSON (NO tienes que arreglarlo!)

Utiliza el bloque de control try...catch para capturar el error y mostrar un mensaje informativo al usuario por pantalla si al usar el método JSON.parse este lanza una excepción porque es incapaz de convertir el texto del fichero a JSON.

## ex2.html -> Abrir con Live Server !

Disponemos de un html con un script del lado cliente que hace un fetch a la API https://score-word-of-the-dat.onrender.com/vbeta/api/score . Nos devuelve un JSON con la puntuación de los alumnos del juego "La palabra del día".

El problema es que hay _tanta demanda_ de esta API que en ocasiones no puede procesar todas las solicitudes del script y no nos devuelve un error que hace fallar toda la aplicación.

Utiliza adecuadamente la estructura try...catch en el fetch de la API para gestionar estas situaciones y muestra un mensaje de error en el div #error-message.

## ex4

Hemos creado una función llamada _findPlate_ que busca la matrícula de un coche en un array de matrículas.
El parámetro _plates_ vamos a pensar que viene de una base de datos que no hace falta validar.
Sin embargo, el parámetro _plate_ si debemos validarlo para que el usuario no nos pase cualquier cosa

- Tenemos que validar que _plate_ no sea un string vacío (ya está implementado)
- Tenemos que validar que _plate_ sea realmente un string. Si no lo es, debemos lanzar una excepción con un mensaje adecuado
- Tenemos que validar que _plate_ sea realmente una matrícula de coche (4 letras cualesquiera seguidas de 3 números). Si no es una matrícula válida debemos lanzar una excepción con un mensaje adecuado.