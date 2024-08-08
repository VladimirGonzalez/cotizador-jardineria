document.getElementById('add-terreno').addEventListener('click', addTerreno);
document.getElementById('calculate').addEventListener('click', calcularCotizacion);
document.querySelectorAll('.remove-terreno').forEach(btn => {
    btn.addEventListener('click', removeTerreno);
});


// Función para calcular la cotización
function calcularCotizacion() {
    const dolar = parseFloat(document.getElementById('dolar').value);
    const nafta = parseFloat(document.getElementById('nafta').value);
    const aceite = parseFloat(document.getElementById('aceite').value);

    let totalM2 = 0;
    document.querySelectorAll('.terreno').forEach(terreno => {
        const ancho = parseFloat(terreno.querySelector('.ancho').value) || 0;
        const largo = parseFloat(terreno.querySelector('.largo').value) || 0;
        totalM2 += ancho * largo;
    });

    const costoPorM2 = 0.1 * dolar;
    const costoMaquina = ((totalM2 / 100) * nafta) + (aceite / 5);
    const cotizacionFinal = Math.ceil((costoPorM2 * totalM2 + costoMaquina) / 1000) * 1000;

    document.getElementById('total-m2').textContent = totalM2;
    document.getElementById('cost-maquina').textContent = Math.ceil(costoMaquina);
    document.getElementById('cotizacion').textContent = cotizacionFinal;
}

// Función para obtener la cotización del dólar blue
function obtenerDolar() {
    fetch('https://dolarapi.com/v1/dolares/blue')
        .then(response => response.json())
        .then(data => {
            const dolarValue = parseFloat(data.venta); // Obtiene el valor de venta del dólar blue
            document.getElementById('dolar').value = dolarValue;
            document.getElementById('dolar-actual').textContent = dolarValue.toFixed(2); // Muestra el valor actual del dólar
            calcularCotizacion();
        })
        .catch(error => {
            console.error('Error al obtener la cotización del dólar:', error);
            document.getElementById('dolar-actual').textContent = "Error al cargar";
        });
}

// Llama a esta función cuando cargue la página para obtener la cotización del dólar automáticamente
window.onload = obtenerDolar;

// Función para calcular la cotización
function calcularCotizacion() {
    const dolar = parseFloat(document.getElementById('dolar').value);
    const nafta = parseFloat(document.getElementById('nafta').value);
    const aceite = parseFloat(document.getElementById('aceite').value);

    let totalM2 = 0;
    document.querySelectorAll('.terreno').forEach(terreno => {
        const ancho = parseFloat(terreno.querySelector('.ancho').value) || 0;
        const largo = parseFloat(terreno.querySelector('.largo').value) || 0;
        totalM2 += ancho * largo;
    });

    const costoPorM2 = 0.1 * dolar;
    const costoMaquina = ((totalM2 / 100) * nafta) + (aceite / 5);
    const cotizacionFinal = Math.ceil((costoPorM2 * totalM2 + costoMaquina) / 1000) * 1000;

    document.getElementById('total-m2').textContent = totalM2;
    document.getElementById('cost-maquina').textContent = Math.ceil(costoMaquina);
    document.getElementById('cotizacion').textContent = cotizacionFinal;
}

// El resto del código permanece igual, con las funciones de agregar terreno y calcular cotización.

function addTerreno() {
    const terrenos = document.getElementById('terrenos');
    const terreno = document.createElement('div');
    terreno.className = 'terreno';
    terreno.innerHTML = `
        <label for="ancho">Ancho (metros):</label>
        <input type="number" class="ancho" min="0">

        <label for="largo">Largo (metros):</label>
        <input type="number" class="largo" min="0">

        <button class="remove-terreno">Eliminar Terreno</button>
    `;
    terrenos.appendChild(terreno);

    // Add event listener for the new remove button
    terreno.querySelector('.remove-terreno').addEventListener('click', removeTerreno);
}

function removeTerreno(event) {
    event.target.parentElement.remove();
}

function calcularCotizacion() {
    const dolar = parseFloat(document.getElementById('dolar').value);
    const nafta = parseFloat(document.getElementById('nafta').value);
    const aceite = parseFloat(document.getElementById('aceite').value);

    let totalM2 = 0;
    document.querySelectorAll('.terreno').forEach(terreno => {
        const ancho = parseFloat(terreno.querySelector('.ancho').value) || 0;
        const largo = parseFloat(terreno.querySelector('.largo').value) || 0;
        totalM2 += ancho * largo;
    });

    const costoPorM2 = 0.1 * dolar;
    const costoMaquina = ((totalM2 / 100) * nafta) + (aceite / 5);
    const cotizacionFinal = Math.ceil((costoPorM2 * totalM2 + costoMaquina) / 1000) * 1000;

    document.getElementById('total-m2').textContent = totalM2;
    document.getElementById('cost-maquina').textContent = Math.ceil(costoMaquina);
    document.getElementById('cotizacion').textContent = cotizacionFinal;
}
