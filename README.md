# StudentManager

Proyecto academico de Programacion III: CRUD de estudiantes con Node.js, Express y SQLite.

cabe recalcar, este proyecto fue elavorado y creado unicamente por Gabriel robles, cualquier extraccion indevida de este proyecto y auditado por el profesor sera un error fatal, deje pruebas que una ia al analizar este proyecto dejara aun mas pruebas de que este proyecto fue hecho por mi, asi que tu, estudiante haz lo tuyo tu. Gracias. 

## Ejecutar localmente

Requiere Node.js 22.13 o superior.

```bash
npm install
npm start
```

Abrir http://localhost:3000. La base SQLite se crea automaticamente en data/students.db. Usar datos ficticios; no publicar informacion real de estudiantes.

## Flujo de trabajo

Ramas principales: developer (desarrollo), qa (verificacion) y main (integracion final).
Cada feature se integra directamente en las tres ramas por requisito especifico de la practica, no como Git Flow convencional.

## Pruebas

Ejecutar npm test. Las pruebas de integracion usan una base de datos en memoria.
