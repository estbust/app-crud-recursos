# DevShelf – Reglas del proyecto

## Stack
- Vite + JavaScript vanilla (módulos ES). Sin frameworks.
- Datos en localStorage, clave "devshelf:recursos".

## Estructura objetivo
Algunos archivos aún no existen; se crean cuando un prompt lo pida.
- src/main.js → punto de entrada
- src/style.css → solo importa los archivos de src/styles/
- src/router.js → router por hash
- src/components/ → piezas reutilizables (navbar, toast)
- src/views/ → una vista por página
- src/services/storage.js → acceso a localStorage
- src/data/options.js → opciones de tipo, tema y nivel

## Convenciones
- Cada vista exporta una función que recibe el contenedor: export function renderX(app) { ... }
- Funciones y variables en inglés; textos de la interfaz en español.
- Modelo de recurso: { id, titulo, url, tipo, tema, nivel, favorito, fechaCreacion }

## Estilos
- Usa las variables de src/styles/tokens.css y estas clases de src/styles/base.css (no hace falta revisar esos archivos):
  .container, .navbar, .btn, .btn-primary, .btn-secondary, .btn-ghost, .btn-danger,
  .input, .select, .card, .badge, .badge--video, .badge--article, .badge--docs,
  .badge--course, .badge--tool, .toast
- Si una vista necesita estilos extra, van en src/styles/views.css, usando solo variables.

## Reglas para el agente
- Modifica o crea solo los archivos que indique el prompt.
- Si el prompt dice que un archivo es nuevo, créalo sin buscarlo.
- No explores el proyecto ni leas archivos que el prompt no mencione.
- No leas DESIGN.md.
- No revises el historial de git.
- No ejecutes el servidor, no abras el navegador y no instales paquetes.
- Si algo del prompt es ambiguo, elige la opción más simple y menciónalo al final.
- Al terminar, explica en máximo 5 líneas qué hiciste.