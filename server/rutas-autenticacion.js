const GestorUsuarios = require("./gestor-usuarios")

class RutasAutenticacion {
  constructor(app, transportadorEmail) {
    this.app = app
    this.transportadorEmail = transportadorEmail
    this.gestorUsuarios = new GestorUsuarios()
    this.configurarRutas()
  }

  configurarRutas() {
    console.log("🔧 Configurando rutas de autenticación...")

    // Ruta para verificar si un usuario existe
    this.app.post("/api/auth/verificar-usuario", async (req, res) => {
      try {
        console.log("🔍 === VERIFICAR USUARIO ===")
        const { email } = req.body

        if (!email) {
          return res.status(400).json({
            exito: false,
            mensaje: "Email requerido",
          })
        }

        const usuario = await this.gestorUsuarios.usuarioExiste(email)

        res.json({
          exito: true,
          existe: !!usuario,
          mensaje: usuario ? "Usuario encontrado" : "Usuario no encontrado",
        })
      } catch (error) {
        console.error("❌ Error verificando usuario:", error)
        res.status(500).json({
          exito: false,
          mensaje: "Error interno del servidor",
        })
      }
    })

    // Ruta para iniciar sesión
    this.app.post("/api/auth/iniciar-sesion", async (req, res) => {
      try {
        console.log("🔐 === INICIAR SESIÓN ===")
        const { email, password } = req.body

        if (!email || !password) {
          return res.status(400).json({
            exito: false,
            mensaje: "Email y contraseña son requeridos",
          })
        }

        console.log(`🔐 Intentando login para: ${email}`)

        // Verificar si el usuario existe primero
        const usuarioExiste = await this.gestorUsuarios.usuarioExiste(email)
        if (!usuarioExiste) {
          return res.status(401).json({
            exito: false,
            mensaje: "Usuario no encontrado. ¿Necesitas registrarte?",
            necesitaRegistro: true,
          })
        }

        // Validar credenciales
        const usuario = await this.gestorUsuarios.validarUsuario(email, password)

        console.log("✅ Login exitoso")
        res.json({
          exito: true,
          mensaje: "Inicio de sesión exitoso",
          usuario: usuario,
        })
      } catch (error) {
        console.error("❌ Error en login:", error.message)

        if (error.message === "Contraseña incorrecta") {
          res.status(401).json({
            exito: false,
            mensaje: "Contraseña incorrecta",
          })
        } else if (error.message === "Usuario no encontrado") {
          res.status(401).json({
            exito: false,
            mensaje: "Usuario no encontrado. ¿Necesitas registrarte?",
            necesitaRegistro: true,
          })
        } else {
          res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor",
          })
        }
      }
    })

    // Ruta para registrar usuario
    this.app.post("/api/auth/registrar", async (req, res) => {
      try {
        console.log("👤 === REGISTRAR USUARIO ===")
        const { nombre, email, password } = req.body

        if (!nombre || !email || !password) {
          return res.status(400).json({
            exito: false,
            mensaje: "Todos los campos son requeridos",
          })
        }

        // Validaciones básicas
        if (nombre.trim().length < 2) {
          return res.status(400).json({
            exito: false,
            mensaje: "El nombre debe tener al menos 2 caracteres",
          })
        }

        if (password.length < 6) {
          return res.status(400).json({
            exito: false,
            mensaje: "La contraseña debe tener al menos 6 caracteres",
          })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          return res.status(400).json({
            exito: false,
            mensaje: "Email inválido",
          })
        }

        console.log(`👤 Registrando usuario: ${email}`)

        const nuevoUsuario = await this.gestorUsuarios.crearUsuario({
          nombre: nombre.trim(),
          email: email.toLowerCase(),
          password,
        })

        console.log("✅ Registro exitoso")

        // Enviar correo a Odoo CRM
        try {
          await this.transportadorEmail.sendMail({
            from: process.env.EMAIL_USER,
            to: "info@assssa1.odoo.com", // <-- Cambia esta dirección por la de tu Odoo CRM
            subject: "Nuevo registro de usuario (Sitio Web)",
            text: `Nuevo usuario registrado:\n\nNombre: ${nuevoUsuario.nombre}\nEmail: ${nuevoUsuario.email}`,
            html: `<h3>Nuevo usuario registrado</h3><ul><li><b>Nombre:</b> ${nuevoUsuario.nombre}</li><li><b>Email:</b> ${nuevoUsuario.email}</li></ul>`
          })
          console.log("✅ Correo enviado a Odoo CRM")
        } catch (err) {
          console.error("❌ Error enviando correo a Odoo CRM:", err.message)
        }

        res.status(201).json({
          exito: true,
          mensaje: "Usuario registrado exitosamente",
          usuario: nuevoUsuario,
        })
      } catch (error) {
        console.error("❌ Error en registro:", error.message)

        if (error.message === "El usuario ya existe") {
          res.status(409).json({
            exito: false,
            mensaje: "El email ya está registrado. ¿Quieres iniciar sesión?",
          })
        } else {
          res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor",
          })
        }
      }
    })

    // Ruta para recuperar contraseña
    this.app.post("/api/auth/olvide-contrasena", async (req, res) => {
      try {
        console.log("🔑 === RECUPERAR CONTRASEÑA ===")
        const { email } = req.body

        if (!email) {
          return res.status(400).json({
            exito: false,
            mensaje: "Email requerido",
          })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          return res.status(400).json({
            exito: false,
            mensaje: "Email inválido",
          })
        }

        console.log(`🔑 Recuperación para: ${email}`)

        const token = await this.gestorUsuarios.crearTokenRecuperacion(email)

        // Enviar correo con enlace de restablecimiento
        const enlace = `http://localhost:5500/restablecer-contrasena.html?token=${token}`;
        await this.transportadorEmail.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Recuperación de contraseña - Golfito Tours",
          html: `<p>Hola,</p><p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para crear una nueva contraseña:</p><p><a href='${enlace}'>Restablecer contraseña</a></p><p>Si no solicitaste este cambio, ignora este mensaje.</p>`
        });
        res.json({
          exito: true,
          mensaje: "Se ha enviado un correo con el enlace para restablecer tu contraseña. Si no lo recibes, revisa tu carpeta de spam."
        });
      } catch (error) {
        console.error("❌ Error en recuperación:", error.message)

        if (error.message === "Usuario no encontrado") {
          res.status(404).json({
            exito: false,
            mensaje: "No se encontró una cuenta con ese email",
          })
        } else {
          res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor",
          })
        }
      }
    })

    // Ruta para restablecer contraseña
    this.app.post("/api/auth/restablecer-contrasena", async (req, res) => {
      try {
        console.log("🔄 === RESTABLECER CONTRASEÑA ===")
        const { token, nuevaContrasena } = req.body

        if (!token || !nuevaContrasena) {
          return res.status(400).json({
            exito: false,
            mensaje: "Token y nueva contraseña son requeridos",
          })
        }

        if (nuevaContrasena.length < 6) {
          return res.status(400).json({
            exito: false,
            mensaje: "La contraseña debe tener al menos 6 caracteres",
          })
        }

        await this.gestorUsuarios.restablecerContrasena(token, nuevaContrasena)

        console.log("✅ Contraseña restablecida")
        res.json({
          exito: true,
          mensaje: "Contraseña restablecida exitosamente",
        })
      } catch (error) {
        console.error("❌ Error restableciendo contraseña:", error.message)

        if (error.message.includes("Token")) {
          res.status(400).json({
            exito: false,
            mensaje: error.message,
          })
        } else {
          res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor",
          })
        }
      }
    })

    console.log("✅ Rutas de autenticación configuradas")
  }
}

module.exports = RutasAutenticacion