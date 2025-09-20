// Sistema de autenticación con manejo de errores mejorado
class SistemaAutenticacionMejorado {
  constructor() {
    this.usuarioActual = null
    this.baseURL = "http://localhost:3000"
    console.log("🔧 DEBUG: Base URL:", this.baseURL)
    this.inicializar()
  }

  inicializar() {
    console.log("🔧 DEBUG: Inicializando sistema de autenticación...")
    this.cargarUsuarioDesdeAlmacenamiento()
    this.configurarEventListeners()
    this.actualizarInterfaz()
    console.log("✅ DEBUG: Sistema inicializado")
  }

  cargarUsuarioDesdeAlmacenamiento() {
    const datosUsuario = localStorage.getItem("usuario_golfito")
    if (datosUsuario) {
      try {
        this.usuarioActual = JSON.parse(datosUsuario)
        console.log("🔧 DEBUG: Usuario cargado desde localStorage:", this.usuarioActual)
      } catch (error) {
        console.error("❌ DEBUG: Error cargando usuario:", error)
        localStorage.removeItem("usuario_golfito")
      }
    }
  }

  configurarEventListeners() {
    console.log("🔧 DEBUG: Configurando event listeners...")

    // Formulario de inicio de sesión
    const formularioLogin = document.getElementById("formularioLogin")
    if (formularioLogin) {
      console.log("✅ DEBUG: Formulario login encontrado")
      formularioLogin.addEventListener("submit", (e) => this.manejarInicioSesion(e))
    } else {
      console.log("❌ DEBUG: Formulario login NO encontrado")
    }

    // Formulario de registro
    const formularioRegistro = document.getElementById("formularioRegistro")
    if (formularioRegistro) {
      console.log("✅ DEBUG: Formulario registro encontrado")
      formularioRegistro.addEventListener("submit", (e) => this.manejarRegistro(e))
    } else {
      console.log("❌ DEBUG: Formulario registro NO encontrado")
    }

    // Formulario de recuperación
    const formularioRecuperacion = document.getElementById("formularioRecuperacion")
    if (formularioRecuperacion) {
      console.log("✅ DEBUG: Formulario recuperación encontrado")
      formularioRecuperacion.addEventListener("submit", (e) => this.manejarOlvideContrasena(e))
    } else {
      console.log("❌ DEBUG: Formulario recuperación NO encontrado")
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (e) => {
      const menuUsuario = document.getElementById("menuUsuario")
      const botonLogin = document.querySelector(".btn-login")

      if (
        menuUsuario &&
        menuUsuario.style.display === "block" &&
        !menuUsuario.contains(e.target) &&
        !botonLogin.contains(e.target)
      ) {
        this.cerrarMenuUsuario()
      }
    })
  }

  async manejarInicioSesion(e) {
    e.preventDefault()
    console.log("🔧 DEBUG: === INICIO DE SESIÓN ===")

    this.limpiarErrores()

    const email = document.getElementById("loginEmail").value.trim()
    const password = document.getElementById("loginPassword").value

    console.log("🔧 DEBUG: Email:", email)
    console.log("🔧 DEBUG: Password length:", password.length)

    // Validaciones frontend
    if (!this.validarEmail(email)) {
      console.log("❌ DEBUG: Email inválido")
      this.mostrarError("loginEmail", "Por favor ingresa un email válido")
      return
    }

    if (!this.validarContrasena(password)) {
      console.log("❌ DEBUG: Contraseña inválida")
      this.mostrarError("loginPassword", "La contraseña debe tener al menos 6 caracteres")
      return
    }

    const botonSubmit = e.target.querySelector('button[type="submit"]')
    const textoOriginal = botonSubmit.innerHTML
    botonSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando...'
    botonSubmit.disabled = true

    try {
      console.log("🔧 DEBUG: Enviando petición de login...")
      console.log("🔧 DEBUG: URL:", `${this.baseURL}/api/auth/iniciar-sesion`)

      const response = await fetch(`${this.baseURL}/api/auth/iniciar-sesion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      console.log("🔧 DEBUG: Respuesta recibida:", response.status, response.statusText)

      // ✅ MANEJO MEJORADO DE RESPUESTAS
      let data
      try {
        data = await response.json()
        console.log("🔧 DEBUG: Datos recibidos:", data)
      } catch (parseError) {
        console.error("❌ DEBUG: Error parseando JSON:", parseError)
        throw new Error("Respuesta del servidor inválida")
      }

      if (response.ok && data.exito) {
        console.log("✅ DEBUG: Login exitoso")
        this.usuarioActual = data.usuario
        localStorage.setItem("usuario_golfito", JSON.stringify(this.usuarioActual))
        this.actualizarInterfaz()
        this.cerrarModal("modalLogin")
        this.mostrarNotificacion(`¡Bienvenido de vuelta, ${this.usuarioActual.nombre}!`)
      } else {
        console.log("❌ DEBUG: Login fallido:", data.mensaje)

        // Manejo específico de errores
        if (data.necesitaRegistro) {
          this.mostrarError("loginEmail", data.mensaje)
          this.mostrarSugerenciaRegistro()
        } else {
          this.mostrarError("loginPassword", data.mensaje || "Error de autenticación")
        }
      }
    } catch (error) {
      console.error("❌ DEBUG: Error completo:", error)
      console.error("❌ DEBUG: Error stack:", error.stack)

      // Mostrar error más específico
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        this.mostrarError("loginEmail", "No se puede conectar al servidor. Verifica tu conexión.")
      } else if (error.message.includes("Respuesta del servidor inválida")) {
        this.mostrarError("loginEmail", "Error del servidor. Intenta de nuevo.")
      } else {
        this.mostrarError("loginEmail", "Error de conexión. Intenta de nuevo.")
      }
    } finally {
      botonSubmit.innerHTML = textoOriginal
      botonSubmit.disabled = false
    }
  }

  async manejarRegistro(e) {
    e.preventDefault()
    console.log("🔧 DEBUG: === REGISTRO ===")

    this.limpiarErrores()

    const nombre = document.getElementById("registerName").value.trim()
    const email = document.getElementById("registerEmail").value.trim()
    const password = document.getElementById("registerPassword").value
    const confirmarPassword = document.getElementById("confirmPassword").value

    console.log("🔧 DEBUG: Datos de registro:", { nombre, email, passwordLength: password.length })

    // Validaciones frontend
    let valido = true

    if (!this.validarNombre(nombre)) {
      this.mostrarError("registerName", "El nombre debe tener al menos 2 caracteres")
      valido = false
    }

    if (!this.validarEmail(email)) {
      this.mostrarError("registerEmail", "Por favor ingresa un email válido")
      valido = false
    }

    if (!this.validarContrasena(password)) {
      this.mostrarError("registerPassword", "La contraseña debe tener al menos 6 caracteres")
      valido = false
    }

    if (password !== confirmarPassword) {
      this.mostrarError("confirmPassword", "Las contraseñas no coinciden")
      valido = false
    }

    if (!valido) {
      console.log("❌ DEBUG: Validaciones fallaron")
      return
    }

    const botonSubmit = e.target.querySelector('button[type="submit"]')
    const textoOriginal = botonSubmit.innerHTML
    botonSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando cuenta...'
    botonSubmit.disabled = true

    try {
      console.log("🔧 DEBUG: Enviando petición de registro...")

      const response = await fetch(`${this.baseURL}/api/auth/registrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nombre, email, password }),
      })

      console.log("🔧 DEBUG: Respuesta registro:", response.status)

      let data
      try {
        data = await response.json()
        console.log("🔧 DEBUG: Datos registro:", data)
      } catch (parseError) {
        console.error("❌ DEBUG: Error parseando JSON:", parseError)
        throw new Error("Respuesta del servidor inválida")
      }

      if (response.ok && data.exito) {
        console.log("✅ DEBUG: Registro exitoso")
        this.usuarioActual = data.usuario
        localStorage.setItem("usuario_golfito", JSON.stringify(this.usuarioActual))
        this.actualizarInterfaz()
        this.cerrarModal("modalLogin")
        this.mostrarNotificacion(`¡Bienvenido, ${this.usuarioActual.nombre}! Tu cuenta ha sido creada exitosamente.`)
      } else {
        console.log("❌ DEBUG: Registro fallido:", data.mensaje)
        this.mostrarError("registerEmail", data.mensaje || "Error en el registro")

        if (data.mensaje && data.mensaje.includes("ya está registrado")) {
          this.mostrarSugerenciaLogin()
        }
      }
    } catch (error) {
      console.error("❌ DEBUG: Error en registro:", error)
      this.mostrarError("registerEmail", "Error de conexión. Intenta de nuevo.")
    } finally {
      botonSubmit.innerHTML = textoOriginal
      botonSubmit.disabled = false
    }
  }

  async manejarOlvideContrasena(e) {
    e.preventDefault()
    console.log("🔧 DEBUG: === RECUPERACIÓN ===")

    this.limpiarErrores()

    const email = document.getElementById("emailRecuperacion").value.trim()

    if (!this.validarEmail(email)) {
      this.mostrarError("emailRecuperacion", "Por favor ingresa un email válido")
      return
    }

    const botonSubmit = e.target.querySelector('button[type="submit"]')
    const textoOriginal = botonSubmit.innerHTML
    botonSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
    botonSubmit.disabled = true

    try {
      console.log("🔧 DEBUG: Enviando petición de recuperación...")

      const response = await fetch(`${this.baseURL}/api/auth/olvide-contrasena`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      })

      console.log("🔧 DEBUG: Respuesta recuperación:", response.status)

      let data
      try {
        data = await response.json()
        console.log("🔧 DEBUG: Datos recuperación:", data)
      } catch (parseError) {
        console.error("❌ DEBUG: Error parseando JSON:", parseError)
        throw new Error("Respuesta del servidor inválida")
      }

      if (response.ok && data.exito) {
        this.mostrarNotificacion("Se ha enviado un email con instrucciones para restablecer tu contraseña")
        this.cerrarModal("modalLogin")
      } else {
        this.mostrarError("emailRecuperacion", data.mensaje || "Error en la recuperación")
      }
    } catch (error) {
      console.error("❌ DEBUG: Error en recuperación:", error)
      this.mostrarError("emailRecuperacion", "Error de conexión. Intenta de nuevo.")
    } finally {
      botonSubmit.innerHTML = textoOriginal
      botonSubmit.disabled = false
    }
  }

  actualizarInterfaz() {
    const botonLogin = document.querySelector(".btn-login")
    if (!botonLogin) {
      console.log("❌ DEBUG: Botón login no encontrado")
      return
    }

    if (this.usuarioActual) {
      console.log("🔧 DEBUG: Actualizando interfaz para usuario logueado")
      botonLogin.innerHTML = `
        <i class="fas fa-user"></i> ${this.usuarioActual.nombre}
        <i class="fas fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>
      `
      botonLogin.onclick = (e) => {
        e.stopPropagation()
        this.toggleMenuUsuario()
      }
    } else {
      console.log("🔧 DEBUG: Actualizando interfaz para usuario no logueado")
      botonLogin.innerHTML = '<i class="fas fa-user"></i> Iniciar Sesión'
      botonLogin.onclick = () => this.abrirModal("modalLogin")
    }
  }

  toggleMenuUsuario() {
    let menuUsuario = document.getElementById("menuUsuario")

    if (!menuUsuario) {
      menuUsuario = this.crearMenuUsuario()
    }

    if (menuUsuario.style.display === "block") {
      this.cerrarMenuUsuario()
    } else {
      this.mostrarMenuUsuario()
    }
  }

  crearMenuUsuario() {
    const menuUsuario = document.createElement("div")
    menuUsuario.id = "menuUsuario"
    menuUsuario.className = "menu-usuario"

    menuUsuario.innerHTML = `
      <div class="menu-usuario-contenido">
        <div class="menu-usuario-header">
          <i class="fas fa-user-circle"></i>
          <div>
            <div class="menu-usuario-nombre">${this.usuarioActual.nombre}</div>
            <div class="menu-usuario-email">${this.usuarioActual.email}</div>
          </div>
        </div>
        <hr>
        <button onclick="sistemaAuth.irAPerfil()" class="menu-usuario-item">
          <i class="fas fa-user-edit"></i> Mi Perfil
        </button>
        <button onclick="sistemaAuth.verMisReservas()" class="menu-usuario-item">
          <i class="fas fa-calendar-alt"></i> Mis Reservas
        </button>
        <button onclick="sistemaAuth.cerrarSesion()" class="menu-usuario-item">
          <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
        </button>
      </div>
    `

    document.body.appendChild(menuUsuario)
    return menuUsuario
  }

  mostrarMenuUsuario() {
    const menuUsuario = document.getElementById("menuUsuario")
    if (menuUsuario) {
      menuUsuario.style.display = "block"
    }
  }

  cerrarMenuUsuario() {
    const menuUsuario = document.getElementById("menuUsuario")
    if (menuUsuario) {
      menuUsuario.style.display = "none"
    }
  }

  cerrarSesion() {
    console.log("🔧 DEBUG: Cerrando sesión")
    this.usuarioActual = null
    localStorage.removeItem("usuario_golfito")
    this.cerrarMenuUsuario()
    this.actualizarInterfaz()
    this.mostrarNotificacion("Sesión cerrada exitosamente")
  }

  mostrarSugerenciaRegistro() {
    const formularioLogin = document.getElementById("formularioLogin")
    let sugerencia = formularioLogin.querySelector(".sugerencia-registro")

    if (!sugerencia) {
      sugerencia = document.createElement("div")
      sugerencia.className = "sugerencia-registro"
      sugerencia.innerHTML = `
        <p style="text-align: center; margin-top: 15px; padding: 10px; background-color: #f0f8ff; border-radius: 5px;">
          ¿No tienes cuenta? 
          <button type="button" class="boton-enlace" onclick="sistemaAuth.cambiarPestana('register')" 
                  style="color: #2d5a27; text-decoration: underline; background: none; border: none; cursor: pointer;">
            Regístrate aquí
          </button>
        </p>
      `
      formularioLogin.appendChild(sugerencia)
    }
  }

  mostrarSugerenciaLogin() {
    const formularioRegistro = document.getElementById("formularioRegistro")
    let sugerencia = formularioRegistro.querySelector(".sugerencia-registro")

    if (!sugerencia) {
      sugerencia = document.createElement("div")
      sugerencia.className = "sugerencia-registro"
      sugerencia.innerHTML = `
        <p style="text-align: center; margin-top: 15px; padding: 10px; background-color: #f0f8ff; border-radius: 5px;">
          ¿Ya tienes cuenta? 
          <button type="button" class="boton-enlace" onclick="sistemaAuth.cambiarPestana('login')"
                  style="color: #2d5a27; text-decoration: underline; background: none; border: none; cursor: pointer;">
            Inicia sesión aquí
          </button>
        </p>
      `
      formularioRegistro.appendChild(sugerencia)
    }
  }

  irAPerfil() {
    this.cerrarMenuUsuario()
    this.mostrarNotificacion("Función de perfil en desarrollo")
  }

  verMisReservas() {
    this.cerrarMenuUsuario()
    this.mostrarNotificacion("Función de reservas en desarrollo")
  }

  // Métodos de utilidad
  validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  validarContrasena(password) {
    return password.length >= 6
  }

  validarNombre(nombre) {
    return nombre.trim().length >= 2
  }

  mostrarError(campo, mensaje) {
    console.log(`🔧 DEBUG: Mostrando error en ${campo}: ${mensaje}`)
    const elementoError = document.getElementById(campo + "Error")
    if (elementoError) {
      elementoError.textContent = mensaje
      elementoError.classList.add("show")
    } else {
      console.log(`❌ DEBUG: Elemento de error ${campo}Error no encontrado`)
    }
  }

  limpiarErrores() {
    const errores = document.querySelectorAll(".error-message")
    errores.forEach((error) => {
      error.classList.remove("show")
      error.textContent = ""
    })

    // Limpiar sugerencias
    const sugerencias = document.querySelectorAll(".sugerencia-registro")
    sugerencias.forEach((sugerencia) => sugerencia.remove())
  }

  cambiarPestana(pestana) {
    console.log(`🔧 DEBUG: Cambiando a pestaña: ${pestana}`)
    const formularioLogin = document.getElementById("formularioLogin")
    const formularioRegistro = document.getElementById("formularioRegistro")
    const formularioRecuperacion = document.getElementById("formularioRecuperacion")
    const pestanas = document.querySelectorAll(".auth-tab")

    // Limpiar errores y sugerencias
    this.limpiarErrores()

    // Limpiar todas las pestañas
    pestanas.forEach((p) => p.classList.remove("active"))

    if (pestana === "login") {
      formularioLogin?.classList.remove("hidden")
      formularioRegistro?.classList.add("hidden")
      formularioRecuperacion?.classList.add("hidden")
      document.querySelector(".auth-tab:first-child")?.classList.add("active")
    } else if (pestana === "register") {
      formularioLogin?.classList.add("hidden")
      formularioRegistro?.classList.remove("hidden")
      formularioRecuperacion?.classList.add("hidden")
      document.querySelector(".auth-tab:nth-child(2)")?.classList.add("active")
    } else if (pestana === "recuperacion") {
      formularioLogin?.classList.add("hidden")
      formularioRegistro?.classList.add("hidden")
      formularioRecuperacion?.classList.remove("hidden")
      document.querySelector(".auth-tab:nth-child(3)")?.classList.add("active")
    }
  }

  abrirModal(idModal) {
    console.log(`🔧 DEBUG: Abriendo modal: ${idModal}`)
    const modal = document.getElementById(idModal)
    if (modal) {
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
      this.limpiarErrores()
    } else {
      console.log(`❌ DEBUG: Modal ${idModal} no encontrado`)
    }
  }

  cerrarModal(idModal) {
    console.log(`🔧 DEBUG: Cerrando modal: ${idModal}`)
    const modal = document.getElementById(idModal)
    if (modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
      this.limpiarErrores()
    }
  }

  mostrarNotificacion(mensaje) {
    console.log(`🔧 DEBUG: Mostrando notificación: ${mensaje}`)
    const notificacion = document.getElementById("notificacion")
    const elementoMensaje = document.getElementById("mensajeNotificacion")

    if (notificacion && elementoMensaje) {
      elementoMensaje.textContent = mensaje
      notificacion.classList.add("show")

      setTimeout(() => {
        notificacion.classList.remove("show")
      }, 4000)
    } else {
      console.log("❌ DEBUG: Elementos de notificación no encontrados")
      alert(mensaje) // Fallback
    }
  }
}

// Inicializar sistema de autenticación mejorado
console.log("🔧 DEBUG: Creando instancia del sistema de autenticación...")
const sistemaAuth = new SistemaAutenticacionMejorado()

// Funciones globales para compatibilidad
function cambiarPestana(pestana) {
  sistemaAuth.cambiarPestana(pestana)
}

function abrirModal(idModal) {
  sistemaAuth.abrirModal(idModal)
}

function cerrarModal(idModal) {
  sistemaAuth.cerrarModal(idModal)
}

function cerrarNotificacion() {
  const notificacion = document.getElementById("notificacion")
  if (notificacion) {
    notificacion.classList.remove("show")
  }
}

// Test de conectividad al cargar
window.addEventListener("load", async () => {
  console.log("🔧 DEBUG: === TEST DE CONECTIVIDAD ===")
  try {
    const response = await fetch("/api/auth/verificar-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "test@conectividad.com" }),
    })
    console.log("✅ DEBUG: Servidor responde:", response.status)
  } catch (error) {
    console.error("❌ DEBUG: Servidor NO responde:", error.message)
  }
})
