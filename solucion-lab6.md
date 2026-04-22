cat > solucion-lab6.md <<'EOF'
# Laboratorio 6 - Solución
**Curso:** Sistemas y Tecnologías Web  
**Estudiante:** Samuel Robledo (241282)  

---

## Descripción
En este laboratorio se trabajó con un servidor en Node.js que contenía varios errores. Primero se ejecutó el archivo proporcionado para identificar qué fallaba, luego se corrigieron las rutas existentes y finalmente se agregaron las nuevas funcionalidades solicitadas.

---

## Parte 1: Identificación y corrección de errores

### Error 1: Tipo de contenido incorrecto en `/info`
En la ruta `/info` se estaba usando el encabezado `"Content-Type": "application-json"`.

Eso es incorrecto, ya que el tipo correcto para responder JSON es `"Content-Type": "application/json"`.

Además, la ruta solo devolvía texto plano, cuando luego en la segunda parte se pedía responder con un objeto JSON.

### Corrección realizada
Se cambió el tipo de contenido y se hizo que la ruta devuelva un JSON válido.

---

### Error 2: Lectura incorrecta del archivo en `/api/student`
En la ruta `/api/student` se tenía la instrucción `const texto = fs.readFile(filePath, "utf-8")`.

El problema es que `readFile` devuelve una promesa y, como no se estaba usando `await`, no se obtenía realmente el contenido del archivo.

### Corrección realizada
Se agregó `await` para esperar la lectura del archivo, quedando como `const texto = await fs.readFile(filePath, "utf-8");`.

También se parseó el contenido con `JSON.parse(texto)` para devolver un JSON real.

---

### Error 3: Respuesta incorrecta para rutas inexistentes
El servidor respondía con código `200` incluso cuando la ruta no existía, usando un mensaje de “Ruta no encontrada”.

Esto estaba mal porque una ruta inexistente debe devolver estado `404`.

### Corrección realizada
Se cambió la respuesta para devolver `404` y además mostrar la ruta que el usuario intentó visitar con el formato `Ruta no encontrada: ${req.url}`.

---

### Error 4: Falta de manejo de errores
El servidor original no tenía manejo de errores. Si fallaba la lectura del archivo `datos.json`, el servidor podía romperse o responder mal.

### Corrección realizada
Se agregó un bloque `try...catch` para manejar errores y devolver estado `500` en caso de falla interna.

---

### Error 5: Estructura general del servidor
También se corrigió la estructura general del servidor para que todas las rutas funcionaran correctamente y el código quedara más claro, ordenado y mantenible.

---

## Parte 2: Cambios solicitados

### 1. Modificación de la ruta `/info`
Se cambió para que responda un JSON con las propiedades pedidas:
- mensaje
- curso
- tecnologia

Ejemplo de respuesta:

{
  "mensaje": "Información del servidor",
  "curso": "Sistemas y Tecnologías Web",
  "tecnologia": "Node.js"
}

---

### 2. Nueva ruta `/saludo`
Se creó una nueva ruta que responde con texto plano:

Hola, bienvenido al laboratorio de Node.js

---

### 3. Nueva ruta `/api/status`
Se creó una ruta que responde con JSON con las propiedades pedidas:
- ok
- status
- puerto

Ejemplo de respuesta:

{
  "ok": true,
  "status": "Servidor funcionando correctamente",
  "puerto": 3000
}

---

### 4. Mejora en la respuesta 404
La respuesta 404 ahora muestra la ruta no encontrada.

Ejemplo:
Ruta no encontrada: /prueba

---

## Evidencia de pruebas desde cliente

### Ruta `/`
Respuesta esperada:
Servidor activo

### Ruta `/info`
Respuesta esperada:

{
  "mensaje": "Información del servidor",
  "curso": "Sistemas y Tecnologías Web",
  "tecnologia": "Node.js"
}

### Ruta `/saludo`
Respuesta esperada:
Hola, bienvenido al laboratorio de Node.js

### Ruta `/api/status`
Respuesta esperada:

{
  "ok": true,
  "status": "Servidor funcionando correctamente",
  "puerto": 3000
}

### Ruta `/api/student`
Respuesta esperada:
Devuelve el contenido del archivo `datos.json`.

### Ruta inexistente
Ejemplo:
Ruta no encontrada: /cualquier-ruta

---

## Cómo ejecutar el servidor

1. Abrir la terminal en la carpeta del proyecto.
2. Ejecutar:

`node servidor-corregido.js`

3. Abrir el navegador o usar un cliente como Postman para probar las rutas:
- `http://localhost:3000/`
- `http://localhost:3000/info`
- `http://localhost:3000/saludo`
- `http://localhost:3000/api/status`
- `http://localhost:3000/api/student`

---

## Conclusión
Se logró corregir el servidor proporcionado, identificando los errores de tipo de contenido, lectura de archivos, manejo de rutas inexistentes y control de errores. Después de eso, se implementaron las nuevas rutas solicitadas y se verificó el funcionamiento correcto de todas las respuestas desde un cliente.
EOF
