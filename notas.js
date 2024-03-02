function calcularPromedios() {
    const alumnos = [
        { nombre: "Ezequiel", notas: [8, 6, 10] },
        { nombre: "Santiago", notas: [9, 5, 9] },
        { nombre: "Teresa", notas: [4, 2, 8] },
        { nombre: "Sofia", notas: [3, 10, 9] },
        { nombre: "Anna", notas: [8, 8, 8] },
        { nombre: "Martina", notas: [9, 5, 7] },
        { nombre: "Julieta", notas: [2, 5, 8] },
        { nombre: "Macarena", notas: [10, 9, 6] },
        { nombre: "Rocio", notas: [6, 7, 7] },
        { nombre: "Carmela", notas: [3, 7, 6] }
    ];

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Promedio de Notas</h2>';
    alumnos.forEach(alumno => {
        let sumaNotas = alumno.notas.reduce((a, b) => a + b, 0);
        let promedio = sumaNotas / alumno.notas.length;
        resultadoDiv.innerHTML += `<p>El promedio de notas de ${alumno.nombre} es: ${promedio.toFixed(2)}</p>`;
    });
}