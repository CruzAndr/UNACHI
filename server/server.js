
// Carga las variables de entorno desde el archivo .env para configurar credenciales y otros parámetros sensibles.
require("dotenv").config()

console.log("EMAIL_USER:", process.env.EMAIL_USER)
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "[OK]" : "[MISSING]")

const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")
const RutasAutenticacion = require("./rutas-autenticacion")
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

// ✅ MIDDLEWARE DEBE IR ANTES DE LAS RUTAS
// Configura los middlewares globales para el servidor Express:
// - express.json(): Permite recibir datos en formato JSON en las peticiones.
// - express.urlencoded(): Permite recibir datos de formularios HTML.
// - express.static(): Sirve archivos estáticos (HTML, CSS, JS, imágenes) desde la raíz del proyecto.
// - cors(): Permite solicitudes desde otros orígenes (útil para desarrollo y APIs).
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "..")))
app.use(cors())

// 🔍 Debug: Verificar variables de entorno
console.log("🔍 Verificando variables de entorno:")
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✅ Configurado" : "❌ No encontrado")
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Configurado" : "❌ No encontrado")

// 📧 Configuración de nodemailer
let transportadorEmail = null

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  try {
    transportadorEmail = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
    console.log("✅ Transportador de email configurado")

    // Test de conexión
    transportadorEmail.verify((error, success) => {
      if (error) {
        console.log("❌ Error de verificación:", error.message)
      } else {
        console.log("✅ Servidor de email listo para enviar mensajes")
      }
    })
  } catch (error) {
    console.error("❌ Error configurando email:", error.message)
  }
} else {
  console.log("⚠️  Variables de email no configuradas")
}

// ✅ CONFIGURAR RUTAS DE AUTENTICACIÓN ANTES DE OTRAS RUTAS
// Inicializa y configura las rutas de autenticación y recuperación de contraseña antes de las rutas estáticas.
console.log("🔧 Configurando rutas de autenticación...")
const rutasAuth = new RutasAutenticacion(app, transportadorEmail)

// ✅ RUTAS ESTÁTICAS (DESPUÉS DE LAS RUTAS DE API)
// Define las rutas para servir los archivos HTML principales del sitio web.
// Cada ruta responde con el archivo HTML correspondiente para cada sección del sitio.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"))
})

app.get("/naturaleza", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "naturaleza.html"))
})

app.get("/aventura", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "aventura.html"))
})

app.get("/playas", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "playas.html"))
})

app.get("/historia", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "historia.html"))
})

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "contacto.html"))
})

app.get("/reserva", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "reserva.html"))
})

// 📧 RUTA DE CONTACTO
// Ruta para procesar el formulario de contacto. Valida los datos y envía un correo electrónico al usuario y al administrador.
app.post("/api/contacto", async (req, res) => {
  try {
    console.log(" INICIANDO PROCESO DE CONTACTO ")
    console.log("Datos recibidos:", req.body)

    const { nombre, email, telefono, asunto, mensaje } = req.body

    if (!nombre || !email || !asunto || !mensaje) {
      console.log("❌ Faltan campos obligatorios")
      return res.status(400).json({
        success: false,
        mensaje: "Todos los campos obligatorios son requeridos",
      })
    }

    if (!transportadorEmail) {
      console.log("❌ Transportador de email no configurado")
      return res.status(500).json({
        success: false,
        mensaje: "Servicio de email no configurado",
      })
    }

    console.log("✅ Validaciones pasadas, enviando email...")

    const opcionesEmail = {
      from: 'golfitotourstop@gmail.com',
      to: email,
      bcc: 'golfitotourstop@gmail.com',
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      html: `
        <img src="cid:imagenGolfito2" alt="Golfito2" style="max-width: 100%; border-radius: 10px; margin-bottom: 10px;"/>
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <hr>
        <p style='color:red;'><strong>Golfito2:</strong> Ahorita no tenemos personal.</p>
        <p>Enviado el: ${new Date().toLocaleString("es-CR")}</p>
      `,
      attachments: [
        {
          filename: 'golfito2.jpg',
          path: require('path').join(__dirname, '../imagenes/golfito2.jpg'),
          cid: 'imagenGolfito2'
        }
      ]
    }

    console.log(" Enviando email...")
    const resultado = await transportadorEmail.sendMail(opcionesEmail)
    console.log("✅ Email enviado exitosamente:", resultado.messageId)

    res.json({
      success: true,
      mensaje: "Mensaje enviado exitosamente",
    })
  } catch (error) {
    console.error("❌ ERROR COMPLETO:", error)
    res.status(500).json({
      success: false,
      mensaje: `Error enviando mensaje: ${error.message}`,
    })
  }
})

// �� RUTA DE RESERVA
// Ruta para procesar el formulario de reserva de tours. Valida los datos y envía un correo electrónico de confirmación.
app.post("/api/reserva", async (req, res) => {
  try {
    console.log(" INICIANDO PROCESO DE RESERVA ")
    console.log("Datos recibidos:", req.body)

    const {
      nombreCompleto,
      emailReserva,
      telefonoReserva,
      fechaTour,
      tourSeleccionado,
      numeroPersonas,
      horarioPreferido,
      comentariosReserva,
    } = req.body

    if (!nombreCompleto || !emailReserva || !telefonoReserva || !fechaTour || !tourSeleccionado || !numeroPersonas) {
      console.log("❌ Faltan campos obligatorios")
      return res.status(400).json({
        success: false,
        mensaje: "Todos los campos obligatorios son requeridos",
      })
    }

    if (!transportadorEmail) {
      console.log("❌ Transportador de email no configurado")
      return res.status(500).json({
        success: false,
        mensaje: "Servicio de email no configurado",
      })
    }

    // Buscar imagen correspondiente al tour
    const fs = require('fs');
    const path = require('path');
    let imagenAdjunta = null;
    const imagenesDir = path.join(__dirname, '../imagenes');
    // Buscar imagen cuyo nombre contenga parte del nombre del tour (ignorando mayúsculas/minúsculas y espacios)
    const archivos = fs.readdirSync(imagenesDir);
    const nombreTourNormalizado = tourSeleccionado.toLowerCase().replace(/\s+/g, '');
    for (const archivo of archivos) {
      const nombreArchivoNormalizado = archivo.toLowerCase().replace(/\s+/g, '');
      if (nombreArchivoNormalizado.includes(nombreTourNormalizado)) {
        imagenAdjunta = path.join(imagenesDir, archivo);
        break;
      }
    }

    // Si no se encuentra, usar una imagen por defecto
    if (!imagenAdjunta) {
      imagenAdjunta = path.join(imagenesDir, 'golfito2.jpg');
    }

    const opcionesEmail = {
      from: 'golfitotourstop@gmail.com',
      to: emailReserva,
      bcc: 'golfitotourstop@gmail.com',
      subject: `Confirmación de Reserva – ${tourSeleccionado}`,
      html: `
        <img src="cid:imagenTour" alt="Imagen del tour" style="max-width: 100%; border-radius: 10px; margin-bottom: 10px;"/>
        <p>Estimado/a <strong>${nombreCompleto}</strong>,</p>
        <p>Nos complace informarle que su reserva en <strong>${tourSeleccionado}</strong> ha sido confirmada exitosamente.</p>
        <h3>Detalles de la Reserva:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${nombreCompleto}</li>
          <li><strong>Fecha de llegada:</strong> ${fechaTour}</li>
          <li><strong>Fecha de salida:</strong> ${fechaTour}</li>
          <li><strong>Número de personas:</strong> ${numeroPersonas}</li>
          <li><strong>Tipo de servicio:</strong> ${tourSeleccionado}</li>
        </ul>
        <h3>Información adicional:</h3>
        <ul>
          <li><strong>Check-in:</strong> A partir de las 14:00</li>
          <li><strong>Check-out:</strong> Hasta las 11:00</li>
          <li><strong>Dirección:</strong> Golfito, Puntarenas, Costa Rica</li>
          <li><strong>Teléfono de contacto:</strong> +506 2775-0000</li>
        </ul>
        <p>Por favor, conserve este correo como comprobante de su reserva. Si tiene alguna consulta o desea realizar cambios, no dude en contactarnos respondiendo a este mensaje o llamando al número indicado.</p>
        <p>¡Gracias por elegirnos! Esperamos brindarle una excelente experiencia.</p>
        <br>
        <p>Atentamente,<br><strong>Isaac Vega</strong><br>Golfito Tours<br>Correo: golfitotourstop  @gmail.com<br>Tel: +506 2775-0000</p>
      `,
      attachments: [
        {
          filename: path.basename(imagenAdjunta),
          path: imagenAdjunta,
          cid: 'imagenTour'
        }
      ]
    }

    console.log(" Enviando email de reserva...")
    const resultado = await transportadorEmail.sendMail(opcionesEmail)
    console.log("✅ Email enviado exitosamente:", resultado.messageId)

    // Guardar reserva en archivo
    const reservasPath = require('path').join(__dirname, '../datos/reservas.json');
    let reservas = [];
    if (fs.existsSync(reservasPath)) {
      try {
        reservas = JSON.parse(fs.readFileSync(reservasPath, 'utf8'));
      } catch (e) {
        reservas = [];
      }
    }
    const nuevaReserva = {
      nombreCompleto,
      emailReserva,
      telefonoReserva,
      fechaTour,
      tourSeleccionado,
      numeroPersonas,
      horarioPreferido,
      comentariosReserva,
      fechaCreacion: new Date().toISOString()
    };
    reservas.push(nuevaReserva);
    fs.writeFileSync(reservasPath, JSON.stringify(reservas, null, 2));

    res.json({
      success: true,
      mensaje: "Reserva enviada exitosamente",
    })
  } catch (error) {
    console.error("❌ ERROR COMPLETO:", error)
    res.status(500).json({
      success: false,
      mensaje: `Error enviando reserva: ${error.message}`,
    })
  }
})

// Nueva ruta para obtener reservas por email
app.get('/api/mis-reservas', (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ success: false, mensaje: 'Falta el parámetro email' });
  }
  const fs = require('fs');
  const reservasPath = require('path').join(__dirname, '../datos/reservas.json');
  let reservas = [];
  if (fs.existsSync(reservasPath)) {
    try {
      reservas = JSON.parse(fs.readFileSync(reservasPath, 'utf8'));
    } catch (e) {
      reservas = [];
    }
  }
  const reservasUsuario = reservas.filter(r => r.emailReserva === email);
  res.json({ success: true, reservas: reservasUsuario });
});

// ✅ MIDDLEWARE DE MANEJO DE ERRORES 404
app.use((req, res) => {
  console.log(`❌ Ruta no encontrada: ${req.method} ${req.url}`)
  res.status(404).json({
    success: false,
    mensaje: `Ruta no encontrada: ${req.method} ${req.url}`,
  })
})

// ✅ MIDDLEWARE DE MANEJO DE ERRORES GENERALES
app.use((error, req, res, next) => {
  console.error("❌ Error del servidor:", error)
  res.status(500).json({
    success: false,
    mensaje: "Error interno del servidor",
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(` Servidor ejecutándose en http://localhost:${PORT}`)
  console.log(` Email configurado: ${transportadorEmail ? "Sí" : "No"}`)
  console.log(" Rutas de autenticación configuradas")
  console.log(" Archivos estáticos servidos desde:", path.join(__dirname, ".."))
})