document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);

        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
});