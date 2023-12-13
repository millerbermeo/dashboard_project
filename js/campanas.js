document.addEventListener('DOMContentLoaded', () => {

    //ESTA ES UNA API LOCAL QUE HICE ELLA RESPONDE CON id, nombre, mensaje y url

    const apiUrl = 'http://127.0.0.1:8000/api/campana';

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
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });

    function displayDataInTable(data) {
        const tableBody = document.getElementById('table-body');

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