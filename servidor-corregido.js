const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const PORT = 3000;
const HOST = "localhost";

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8"
  });
  res.end(message);
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(data, null, 2));
}

async function getStudentData() {
  const filePath = path.join(__dirname, "datos.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent);
}

async function requestHandler(req, res) {
  const requestedUrl = req.url;

  switch (requestedUrl) {
    case "/":
      sendText(res, 200, "Servidor activo - Laboratorio 6 de Node.js");
      break;

    case "/info":
      sendJson(res, 200, {
        mensaje: "Información del servidor",
        curso: "Sistemas y Tecnologías Web",
        tecnologia: "Node.js"
      });
      break;

    case "/saludo":
      sendText(res, 200, "Hola, bienvenido al Laboratorio 6 de Node.js.");
      break;

    case "/api/status":
      sendJson(res, 200, {
        ok: true,
        status: "Servidor funcionando correctamente",
        puerto: PORT
      });
      break;

    case "/api/student": {
      const studentData = await getStudentData();
      sendJson(res, 200, studentData);
      break;
    }

    default:
      sendText(res, 404, `Ruta no encontrada: ${requestedUrl}`);
      break;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    await requestHandler(req, res);
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: "Error interno del servidor",
      detalle: error.message
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
