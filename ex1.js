

const fs = require('fs');

/** NO PODEMOS MODIFICAR LA FUNCIÓN, NO ES NUESTRA */
function readAndDisplayJSON(filename) {
    // Leer el archivo de manera sincrónica
    const data = fs.readFileSync(filename, 'utf8');

    // Intentar parsear el JSON
    const people = JSON.parse(data); // 

    // Mostrar los nombres y correos electrónicos
    people.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}`);
    });

}

// Ejecutar la función con el nombre del archivo
try {

    readAndDisplayJSON('people1.json');
    // Este fichero falla. Usar try...catch para gestionar el error
    readAndDisplayJSON('people1_bad.json');
} catch (err) {
    console.log("Ha ocurrido un error");
    console.log(err.message);
}