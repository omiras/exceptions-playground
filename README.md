# Ejercicios sobre la gestión de errores y excepciones

## ex1.js

Ejecuta `node ex1.js`

El script lee de forma adecuada un fichero JSON y muestra el nombre y email del fichero _people1.json_. Sin embargo, si intentamos cargar _people1_bad.json_ va a fallar estrepitosmanete porque está mal formado el JSON (NO tienes que arreglarlo!)

Utiliza el bloque de control try...catch para capturar el error y mostrar un mensaje informativo al usuario por pantalla si al usar el método JSON.parse este lanza una excepción porque es incapaz de convertir el texto del fichero a JSON.

## ex1b.html -> Abrir con Live Server !

Somos programadores en la compañia RyanAir y utilizamos el software de seguridad [CrowdStrike](https://www.elespanol.com/omicrono/software/20240724/crowdstrike-explica-origen-apagon-informatico-mundial-afecto-millones-equipos-windows/872912725_0.html)

La aplicación calcula los gastos de facturación de las maletas en función de los quilos que pese.

El problema es que la última actualización de Crowdstrike hace fallar la app estrepitosamente. El otro problema es que tampoco podemos dejar de usar por completo el software dado que funciona parcialmente y si lo desactivamos nos pueden hackear los sistemas con facilidad

Solamente tenemos acceso al fichero ex1b.html. Modifica adecuadamente el código para gestionar el error de actualización del software y que se pueda seguir utilizando la aplicación para ~~timar~~ facturar el equipaje


## ex2.html -> Abrir con Live Server !

Disponemos de un html con un script del lado cliente que hace un fetch a la API 'https://api-programming-questions.onrender.com/api/v2beta/question/random' . Es la nueva versión de la API sobre preguntas tipo test de programación

El problema es que hay _tanta demanda_ de esta API que en ocasiones no puede procesar todas las solicitudes del script y no nos devuelve un error que hace fallar toda la aplicación.

Gestiona adecuadamente los fallos para informar al usuario que en estos momentos no se puede utilizar la API debido a la alta demanda.

## ex3

Valida los parámetros de entrada de la función tal y como se expresa en los comentarios del ejercicio

## ex3b

Valida los parámetros de entrada de la función tal y como se expresa en los comentarios del ejercicio

## ex4

Hemos creado una función llamada _findPlate_ que busca la matrícula de un coche en un array de matrículas.
El parámetro _plates_ vamos a pensar que viene de una base de datos que no hace falta validar.
Sin embargo, el parámetro _plate_ si debemos validarlo para que el usuario no nos pase cualquier cosa,
Modifica **unicamente** el cuerpo del a función:

- Tenemos que validar que _plate_ no sea un string vacío (ya está implementado)
- Tenemos que validar que _plate_ sea realmente un string. Si no lo es, debemos lanzar una excepción con un mensaje adecuado
- Tenemos que validar que _plate_ sea realmente una matrícula de coche (4 letras cualesquiera seguidas de 3 números). Si no es una matrícula válida debemos lanzar una excepción con un mensaje adecuado.