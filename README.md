````md
# Laboratorio 6: Servidor HTTP con Node.js

<p align="center">
  <strong>Universidad del Valle de Guatemala</strong><br>
  Sistemas y Tecnologías Web<br>
  Docente: Marlon Fuentes
</p>

---

## Información académica

**Estudiante:** Samuel Robledo (241282)  
**Curso:** Sistemas y Tecnologías Web  
**Universidad:** Universidad del Valle de Guatemala  

---

## Descripción

Este repositorio contiene la solución desarrollada para el **Laboratorio 6** del curso **Sistemas y Tecnologías Web**. La práctica consistió en analizar un servidor proporcionado con errores, corregir su funcionamiento y extenderlo mediante la incorporación de nuevas rutas y respuestas en formato JSON.

El desarrollo fue realizado en **Node.js**, utilizando módulos nativos del entorno. A través de este laboratorio se reforzaron conceptos fundamentales relacionados con la creación de servidores HTTP, el manejo de rutas, la lectura de archivos locales, la devolución de respuestas en texto plano y JSON, así como el tratamiento adecuado de errores y rutas no encontradas.

---

## Objetivo general

Corregir y mejorar un servidor HTTP en Node.js para que cumpla con los requerimientos funcionales establecidos en el laboratorio.

---

## Objetivos específicos

- Ejecutar el archivo proporcionado e identificar los errores presentes en su implementación.
- Corregir las rutas existentes para que respondan correctamente.
- Implementar nuevas rutas solicitadas en las instrucciones del laboratorio.
- Devolver respuestas adecuadas tanto en texto plano como en formato JSON.
- Leer información desde un archivo local y exponerla mediante una ruta tipo API.
- Documentar de manera clara y ordenada las correcciones realizadas.

---

## Funcionalidades implementadas

La versión final del servidor incluye las siguientes rutas:

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/` | GET | Devuelve un mensaje en texto plano indicando que el servidor está activo. |
| `/info` | GET | Responde con un objeto JSON con información general del servidor. |
| `/saludo` | GET | Devuelve un mensaje de saludo en texto plano. |
| `/api/status` | GET | Responde con un objeto JSON con el estado del servidor y el puerto. |
| `/api/student` | GET | Lee el archivo `datos.json` y devuelve su contenido en formato JSON. |

### Manejo de rutas inexistentes

Cuando el usuario accede a una ruta no definida, el servidor responde con estado **404** e indica cuál fue la dirección que se intentó visitar.

---

## Correcciones realizadas

Durante el desarrollo del laboratorio se identificaron y corrigieron distintos problemas presentes en el archivo original. Entre las mejoras más relevantes se encuentran las siguientes:

- Corrección del encabezado `Content-Type` para respuestas JSON.
- Lectura correcta del archivo `datos.json` mediante operaciones asíncronas.
- Conversión apropiada de la información leída a formato JSON.
- Implementación adecuada de la respuesta `404` para rutas no encontradas.
- Incorporación de manejo de errores para evitar fallos inesperados.
- Reorganización del código para lograr una estructura más clara y mantenible.

---

## Estructura del proyecto

```text
lab6-node/
├── servidor-corregido.js
├── datos.json
├── solucion-lab6.md
└── README.md
````

---

## Tecnologías utilizadas

* **Node.js**
* **JavaScript**
* Módulo nativo **http**
* Módulo nativo **fs/promises**
* Módulo nativo **path**

---

## Instrucciones de ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/samuelrobledo52/lab6-node.git
cd lab6-node
```

### 2. Ejecutar el servidor

```bash
node servidor-corregido.js
```

### 3. Probar las rutas

Una vez iniciado el servidor, se pueden verificar las siguientes direcciones desde el navegador, `curl` o Postman:

```text
http://localhost:3000/
http://localhost:3000/info
http://localhost:3000/saludo
http://localhost:3000/api/status
http://localhost:3000/api/student
http://localhost:3000/no-existe
```

---

## Ejemplos de respuesta

### Respuesta de `/info`

```json
{
  "mensaje": "Información del servidor",
  "curso": "Sistemas y Tecnologías Web",
  "tecnologia": "Node.js"
}
```

### Respuesta de `/api/status`

```json
{
  "ok": true,
  "status": "Servidor funcionando correctamente",
  "puerto": 3000
}
```

### Respuesta de `/api/student`

```json
{
  "nombre": "Samuel Robledo",
  "carnet": "241282",
  "curso": "Sistemas y Tecnologías Web",
  "universidad": "Universidad del Valle de Guatemala"
}
```

---

## Cumplimiento de requerimientos

### Parte 1

* Ejecución del archivo original.
* Identificación de errores en la implementación.
* Corrección de las rutas existentes.
* Verificación del funcionamiento desde un cliente.
* Documentación de los cambios realizados.

### Parte 2

* Modificación de la ruta `/info` para devolver JSON.
* Creación de la ruta `/saludo`.
* Creación de la ruta `/api/status`.
* Mejora de la respuesta `404` mostrando la ruta no encontrada.

---

## Conclusión

El desarrollo de este laboratorio permitió aplicar de forma práctica los fundamentos relacionados con la creación de servidores HTTP en Node.js. A partir de la corrección del archivo inicial y de la incorporación de nuevas funcionalidades, se obtuvo una versión del servidor más clara, funcional y ordenada, cumpliendo con los objetivos establecidos en la práctica.

---

## Autor

**Samuel Robledo (241282)**
Universidad del Valle de Guatemala

---

## Estado del proyecto

**Laboratorio completado y funcional**

```
```
