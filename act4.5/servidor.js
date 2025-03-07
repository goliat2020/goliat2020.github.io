import http from 'http'; // Módulo para crear el servidor HTTP
import fs from 'fs'; // Módulo para leer archivos del sistema

// Función para mostrar la página de bienvenida
function darBienvenida(req, res) {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Código 500: Error interno del servidor
            res.end('Oh no!!!! Algo salió mal.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Código 200: Respuesta exitosa
        res.end(data);
    });
}

// Función para devolver un JSON con datos de escuelas
function getEscuelas(req, res) {
    const escuelas = [
        { "nombre": "Escuela Benito Juárez", "direccion": "Av. Principal 123, CDMX" },
        { "nombre": "Escuela Miguel Hidalgo", "direccion": "Calle Reforma 456, Guadalajara" }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(escuelas)); // Convertimos el objeto en una cadena JSON
}

// Función para mostrar la página de escuelas
function mostrarEscuelas(req, res) {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! Algo salió mal.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para devolver un JSON con datos de donantes
function getDonantes(req, res) {
    const donantes = [
        { "nombre": "Juan Pérez", "cantidad": "500 USD" },
        { "nombre": "María López", "cantidad": "300 USD" }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(donantes));
}

// Función para mostrar la página de donantes
function mostrarDonantes(req, res) {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! Algo salió mal.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para mostrar la página del equipo
function mostrarEquipo(req, res) {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al cargar la página del equipo.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para mostrar la página de opinión
function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al cargar la página de opinión.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para manejar rutas no encontradas
function manejarRuta404(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Oh no, te perdiste en el ciberespacio! 🚀');
}

// Creación del servidor
const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        darBienvenida(req, res);
    } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
    } else if (url === '/api/donantes') {
        getDonantes(req, res);
    } else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
    } else if (url === '/donantes') {
        mostrarDonantes(req, res);
    } else if (url === '/equipo') {
        mostrarEquipo(req, res);
    } else if (url === '/opinion') {
        mostrarOpinion(req, res);
    } else {
        manejarRuta404(req, res);
    }
});

const puerto = 1984;
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

// Documentación sobre createServer: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
