require("dotenv").config()
const EmailService = require("../lib/email-service")

async function testearEmail() {
  console.log("📧 Probando configuración de email...")

  const emailService = new EmailService()

  try {
    // Verificar conexión
    const conexionOk = await emailService.verificarConexion()
    if (!conexionOk) {
      console.log("❌ Error en la conexión de email")
      return
    }

    // Enviar email de prueba
    await emailService.enviarEmailRecuperacion(
      "test@example.com",
      "Usuario de Prueba",
      "http://localhost:3000/restablecer-contrasena.html?token=test123",
    )

    console.log("✅ Email de prueba enviado exitosamente")
  } catch (error) {
    console.error("❌ Error enviando email de prueba:", error)
  }
}

testearEmail()
