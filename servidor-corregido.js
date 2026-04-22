const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Servidor activo");
      return;
    }

    if (req.url === "/info") {
      const data = {
        mensaje: "Información del servidor",
        curso: "Sistemas y Tecnologías Web",
        tecnologia: "Node.js"
      };

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data));
      return;
    }

    if (req.url === "/saludo") {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Hola, bienvenido al laboratorio de Node.js");
      return;
    }

    if (req.url === "/api/status") {
      const data = {
        ok: true,
        status: "Servidor funcionando correctamente",
        puerto: PORT
      };

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data));
      return;
    }

    if (req.url === "/api/student") {
      const filePath = path.join(__dirname, "datos.json");
      const texto = await fs.readFile(filePath, "utf-8");
      const datos = JSON.parse(texto);

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(datos));
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Ruta no encontrada: ${req.url}`);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      ok: false,
      error: "Error interno del servidor",
      detalle: error.message
    }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
