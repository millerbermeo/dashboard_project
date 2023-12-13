document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "";

    function previewImage(input, previewId) {
        const preview = document.getElementById(previewId);
        const file = input.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                console.log('Imagen cargada exitosamente.');
                preview.innerHTML = `<img src="${e.target.result}" alt="Vista previa" class="placeholder">`;
                // Cambiar el mensaje cuando se selecciona una imagen
                document.querySelector('#imagenInput + .placeholder').textContent = 'Imagen seleccionada';
            };

            reader.readAsDataURL(file);
        } else {
            console.log('No se seleccionó ninguna imagen.');
            preview.innerHTML = '';
        }
    }

    function previewDocument(input, previewId) {
        const preview = document.getElementById(previewId);
        const file = input.files[0];

        if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            console.log('Documento cargado exitosamente.');
            preview.textContent = file.name;
            // Cambiar el mensaje cuando se selecciona un documento
            document.querySelector('#documentoInput + .placeholder').textContent = 'Documento seleccionado';
        } else {
            console.log('No se seleccionó ningún documento válido.');
            preview.textContent = 'No se ha seleccionado ningún documento';
        }
    }

    function updateTextPreview(input, previewId) {
        const preview = document.getElementById(previewId);
        console.log('Texto actualizado:', input.value);
        preview.textContent = input.value;
    }

    function sendData() {
        const campana = document.getElementById('campana').value;
        const texto = document.getElementById('texto').value;

        if (campana.trim() === '' || texto.trim() === '') {
            console.log('Por favor, complete todos los campos antes de enviar.');
            return;
        }

        let contenido;
        if (document.getElementById('mostrar-imagen-doc').innerHTML !== '') {
            contenido = document.getElementById('mostrar-imagen-doc').innerHTML;
        } else if (document.getElementById('mostrar-documento').textContent !== 'No se ha seleccionado ningún documento') {
            contenido = document.getElementById('mostrar-documento').textContent;
        } else {
            contenido = 'No se ha seleccionado contenido';
        }

        const data = {
            campana,
            texto,
            contenido,
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Solicitud exitosa:', result);
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
        });
    }

    document.getElementById('imagenInput').addEventListener('change', function () {
        console.log('Cambio en el input de imagen.');
        document.getElementById('mostrar-documento').textContent = '';
        previewImage(this, 'mostrar-imagen-doc');
    });

    document.getElementById('documentoInput').addEventListener('change', function () {
        console.log('Cambio en el input de documento.');
        document.getElementById('mostrar-imagen-doc').innerHTML = '';
        previewDocument(this, 'mostrar-documento');
    });

    document.getElementById('texto').addEventListener('input', function () {
        console.log('Cambio en el input de texto.');
        updateTextPreview(this, 'mostrar-texto');
    });

    document.getElementById('submit-button').addEventListener('click', function () {
        console.log('Enviando datos al servidor...');
        sendData();
    });
});
