/* ---- Importaciones ---- */
require('dotenv').config()
const cors = require('cors')

const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

//Configuracion para solicitudes
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Habilita CORS
app.use(cors());


app.listen(PORT, () => {
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})