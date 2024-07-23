

const fs = require('fs');


function readAndDisplayJSON(filename) {
    // Leer el archivo de manera sincrónica
    const data = fs.readFileSync(filename, 'utf8');

    // Intentar parsear el JSON
    const people = JSON.parse(data);

    // Mostrar los nombres y correos electrónicos
    people.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}`);
    });

}

// Ejecutar la función con el nombre del archivo
readAndDisplayJSON('people1.json');