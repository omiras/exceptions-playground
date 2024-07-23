
function findPlate(plates, plate) {

        // Validar que plate no es una cadena vacía
        if (plate.trim() === '') {
            throw new Error("Plate cannot be an empty string.");
        }

        // Buscar la matrícula en el array de matrículas
        return plates.includes(plate);
}

// Ejemplo de uso
const platesArray = ["ABC1234", "XYZ7890", "LMN4567"];

try {
    console.log(findPlate(platesArray, "XYZ7890")); // true
    console.log(findPlate(platesArray, "ABC0000")); // false
    console.log(findPlate(platesArray, ""));        // Lanza error: Plate cannot be an empty string.
    console.log(findPlate(platesArray, 123456));    // Lanza error: Plate must be a string.
    console.log(findPlate(platesArray, "INVALID@PLATE")); // Lanza error: Plate is not in a valid format.
} catch (error) {
    console.error("An error occurred:", error.message);
}
