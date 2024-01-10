const express = require('express');
//const cors = require('cors');
const path = require('path');
const app = express();
const port = 3400;

//app.use(cors());

// Ruta para servir archivos desde la carpeta 'downloads'
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Ruta para servir latest.yml
app.get('/downloads/latest.yml', (req, res) => {
  // Lógica para servir latest.yml
  // Puedes leer el contenido del archivo y enviarlo como respuesta
  const latestYmlPath = path.join(__dirname, 'downloads', 'latest.yml');
  res.sendFile(latestYmlPath);
});

app.listen(port, () => {
  console.log(`Servidor de actualizaciones escuchando en http://localhost:${port}`);
});
