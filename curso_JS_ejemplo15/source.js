// Cargar el archivo JSON y renderizar la tabla
fetch('data.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
})
.then(data => {
    const tablaBody = document.querySelector('#tabla tbody');
    
    // Iterar sobre los datos y construir las filas
    data.forEach(persona => {
        const fila = document.createElement('tr');

        // Crear celdas para nombre, edad y sexo
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.sexo}</td>
        `;
        
        // Agregar la fila al cuerpo de la tabla
        tablaBody.appendChild(fila);
    });
})
.catch(error => console.error('Error al procesar JSON:', error));