const fs = require("fs")
const path = require("path")

console.log("🔧 Configurando base de datos...")

// Crear directorio de base de datos
const dbPath = path.join(__dirname, "..", "database")
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath, { recursive: true })
  console.log("✅ Directorio de base de datos creado")
}

// Crear archivo de usuarios
const usersFile = path.join(dbPath, "users.json")
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, JSON.stringify([]))
  console.log("✅ Archivo de usuarios creado")
}

// Crear archivo de tokens
const tokensFile = path.join(dbPath, "tokens.json")
if (!fs.existsSync(tokensFile)) {
  fs.writeFileSync(tokensFile, JSON.stringify([]))
  console.log("✅ Archivo de tokens creado")
}

console.log("🎉 Base de datos configurada exitosamente")
