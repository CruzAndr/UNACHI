const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt")
const crypto = require("crypto")

class GestorUsuarios {
  constructor() {
    // Base de datos simulada en memoria
    this.usuarios = new Map()
    this.tokensRecuperacion = new Map()
    this.rutaUsuarios = path.join(__dirname, '../datos/usuarios.json')
    this.cargarUsuariosDesdeArchivo()

    // Crear usuario de prueba
    this.crearUsuarioPrueba()
  }

  cargarUsuariosDesdeArchivo() {
    try {
      if (fs.existsSync(this.rutaUsuarios)) {
        const data = fs.readFileSync(this.rutaUsuarios, 'utf8')
        const usuariosObj = JSON.parse(data)
        for (const email in usuariosObj) {
          this.usuarios.set(email, usuariosObj[email])
        }
        console.log('✅ Usuarios cargados desde archivo')
      } else {
        console.log('❌ Archivo de usuarios no encontrado, se creará uno nuevo al guardar.')
      }
    } catch (error) {
      console.error('❌ Error cargando usuarios desde archivo:', error)
    }
  }

  guardarUsuariosEnArchivo() {
    try {
      const usuariosObj = {}
      for (const [email, usuario] of this.usuarios.entries()) {
        usuariosObj[email] = usuario
      }
      fs.writeFileSync(this.rutaUsuarios, JSON.stringify(usuariosObj, null, 2), 'utf8')
      console.log('✅ Usuarios guardados en archivo')
    } catch (error) {
      console.error('❌ Error guardando usuarios en archivo:', error)
    }
  }

  async crearUsuarioPrueba() {
    try {
      if (!this.usuarios.has("test@test.com")) {
        const passwordHash = await bcrypt.hash("123456", 10)
        this.usuarios.set("test@test.com", {
          id: 1,
          nombre: "Usuario de Prueba",
          email: "test@test.com",
          password: passwordHash,
          fechaCreacion: new Date(),
          activo: true,
        })
        this.guardarUsuariosEnArchivo()
        console.log("✅ Usuario de prueba creado: test@test.com / 123456")
      }
    } catch (error) {
      console.error("❌ Error creando usuario de prueba:", error)
    }
  }

  async usuarioExiste(email) {
    console.log(`🔍 Verificando si existe usuario: ${email}`)
    const existe = this.usuarios.has(email.toLowerCase())
    console.log(`${existe ? "✅" : "❌"} Usuario ${email} ${existe ? "existe" : "no existe"}`)
    return existe ? this.usuarios.get(email.toLowerCase()) : null
  }

  async validarUsuario(email, password) {
    console.log(`🔐 Validando usuario: ${email}`)

    const usuario = this.usuarios.get(email.toLowerCase())
    if (!usuario) {
      console.log("❌ Usuario no encontrado")
      throw new Error("Usuario no encontrado")
    }

    if (!usuario.activo) {
      console.log("❌ Cuenta desactivada")
      throw new Error("Cuenta desactivada")
    }

    console.log("🔑 Comparando contraseñas...")
    const passwordValida = await bcrypt.compare(password, usuario.password)

    if (!passwordValida) {
      console.log("❌ Contraseña incorrecta")
      throw new Error("Contraseña incorrecta")
    }

    console.log("✅ Usuario validado correctamente")

    // Retornar usuario sin la contraseña
    const { password: _, ...usuarioSinPassword } = usuario
    return usuarioSinPassword
  }

  async crearUsuario({ nombre, email, password }) {
    console.log(`👤 Creando nuevo usuario: ${email}`)

    const emailLower = email.toLowerCase()

    if (this.usuarios.has(emailLower)) {
      console.log("❌ Usuario ya existe")
      throw new Error("El usuario ya existe")
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const nuevoUsuario = {
      id: this.usuarios.size + 1,
      nombre,
      email: emailLower,
      password: passwordHash,
      fechaCreacion: new Date(),
      activo: true,
    }

    this.usuarios.set(emailLower, nuevoUsuario)
    this.guardarUsuariosEnArchivo()
    console.log("✅ Usuario creado exitosamente")

    // Retornar usuario sin la contraseña
    const { password: _, ...usuarioSinPassword } = nuevoUsuario
    return usuarioSinPassword
  }

  async crearTokenRecuperacion(email) {
    console.log(`🔑 Creando token de recuperación para: ${email}`)

    const emailLower = email.toLowerCase()
    const usuario = this.usuarios.get(emailLower)

    if (!usuario) {
      console.log("❌ Usuario no encontrado para recuperación")
      throw new Error("Usuario no encontrado")
    }

    const token = crypto.randomBytes(32).toString("hex")
    const expiracion = new Date(Date.now() + 60 * 60 * 1000) // 1 hora

    this.tokensRecuperacion.set(token, {
      email: emailLower,
      expiracion,
      usado: false,
    })

    console.log("✅ Token de recuperación creado")
    return token
  }

  async restablecerContrasena(token, nuevaContrasena) {
    console.log(`🔄 Restableciendo contraseña con token: ${token.substring(0, 8)}...`)

    const tokenData = this.tokensRecuperacion.get(token)

    if (!tokenData) {
      console.log("❌ Token inválido")
      throw new Error("Token inválido")
    }

    if (tokenData.usado) {
      console.log("❌ Token ya utilizado")
      throw new Error("Token ya utilizado")
    }

    if (new Date() > tokenData.expiracion) {
      console.log("❌ Token expirado")
      throw new Error("Token expirado")
    }

    const usuario = this.usuarios.get(tokenData.email)
    if (!usuario) {
      console.log("❌ Usuario no encontrado")
      throw new Error("Usuario no encontrado")
    }

    // Actualizar contraseña
    const passwordHash = await bcrypt.hash(nuevaContrasena, 10)
    usuario.password = passwordHash

    // Marcar token como usado
    tokenData.usado = true

    this.guardarUsuariosEnArchivo()
    console.log("✅ Contraseña restablecida exitosamente")
  }
}

module.exports = GestorUsuarios