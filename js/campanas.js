document.addEventListener('DOMContentLoaded', () => {

    const apiUrl = 'http://127.0.0.1:8000/api/campana';

    // Obtener referencia al input de búsqueda
    const searchInput = document.querySelector('.search-input');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
            displayDataInTable(data);

            // Agregar evento de escucha al input de búsqueda
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.trim().toLowerCase();
                const filteredData = data.filter(item => item.nombre.toLowerCase().includes(searchTerm));
                displayDataInTable(filteredData);
            });
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });

    function displayDataInTable(data) {
        const tableBody = document.getElementById('table-body');
        
        // Limpiar la tabla antes de mostrar los resultados actualizados
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.mensaje}</td>
                <td><a class="url-link" href="${item.url}">${item.url}</a></td>
            `;
            tableBody.appendChild(row);
        });
    }
});
