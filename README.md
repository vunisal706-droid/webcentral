# 📱 Apps Educativas CEIP Capitulaciones

Portal web centralizado de todas las aplicaciones educativas del CEIP Capitulaciones.

## 🌟 Características

- ✅ **PWA Instalable** - Se puede instalar en móviles, tablets y ordenadores
- ✅ **Diseño Responsive** - Optimizado para móviles, tablets, iPhone, Android y pizarras digitales PDI
- ✅ **Vista Horizontal Optimizada** - Perfecto para pizarras digitales en aulas
- ✅ **Diseño Profesional** - Interfaz limpia y atractiva con el logo oficial del CEIP
- ✅ **Funciona Offline** - Una vez cargada, funciona sin conexión a internet

## 📚 Apps Incluidas

1. **Capitulín Multiplicaciones** - Práctica de tablas de multiplicar
2. **Capitulín Sumas y Restas** - Operaciones básicas
3. **Matemático** - Herramienta completa de matemáticas
4. **LecturApp** - Desarrollo de lectura comprensiva
5. **Animales** - Aprendizaje sobre el mundo animal

## 🚀 Instalación

### Para subir a GitHub Pages:

1. Crea un repositorio en GitHub
2. Sube todos los archivos de este proyecto
3. Ve a Settings > Pages
4. Selecciona la rama main y carpeta root
5. ¡Tu app estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]/`

### Para instalar como PWA en dispositivos:

**En móviles Android:**
1. Abre la web en Chrome
2. Toca el menú (tres puntos)
3. Selecciona "Añadir a pantalla de inicio"

**En iPhone/iPad:**
1. Abre la web en Safari
2. Toca el botón de compartir
3. Selecciona "Añadir a pantalla de inicio"

**En ordenadores (Chrome):**
1. Abre la web en Chrome
2. Haz clic en el icono de instalar en la barra de direcciones
3. O ve a menú > "Instalar Apps Educativas CEIP..."

## 📁 Estructura de archivos

```
apps-capitulaciones/
├── index.html           # Página principal
├── manifest.json        # Configuración PWA
├── service-worker.js    # Service worker para funcionalidad offline
├── favicon.ico         # Favicon para navegadores
├── icon-*.png          # Iconos en múltiples tamaños (16, 32, 48, 72, 96, 120, 144, 152, 180, 192, 512)
└── README.md           # Este archivo
```

## 🎨 Personalización

Para añadir nuevas apps, edita el archivo `index.html` y añade un nuevo bloque:

```html
<a href="URL_DE_TU_APP" class="app-card" target="_blank">
    <div class="app-icon">🎯</div>
    <h2>Nombre de la App</h2>
    <p>Descripción breve de la app.</p>
    <span class="app-badge">Categoría</span>
</a>
```

## 💡 Notas Técnicas

- Compatible con todos los navegadores modernos
- Optimizado para pantallas desde 320px hasta 4K
- Diseño especial para orientación horizontal en pizarras digitales
- Animaciones suaves para mejor experiencia de usuario
- Service Worker para funcionamiento offline

## 📱 Compatibilidad

✅ Android (Chrome, Firefox, Edge)  
✅ iOS/iPadOS (Safari)  
✅ Windows (Chrome, Edge, Firefox)  
✅ macOS (Chrome, Safari, Firefox)  
✅ Linux (Chrome, Firefox)  
✅ Pizarras Digitales Interactivas (PDI)

---

**CEIP Capitulaciones** - Santa Fe, Granada  
2025 - Apps Educativas
