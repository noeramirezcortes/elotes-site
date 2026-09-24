# Aplicación Web Don Elote

Crear una aplicación web moderna y responsiva para un negocio de elotes mexicano con menú de productos, sistema de carrito y pedidos por WhatsApp, usando HTML/CSS/JS vanilla con Tailwind y Alpine.js para fácil despliegue en Cloudflare Pages.

## Resumen
Construir una aplicación web de página única moderna para "Don Elote" usando HTML/CSS/JavaScript vanilla con Tailwind CSS y Alpine.js vía CDN. Este enfoque no requiere herramientas de build, puede desplegarse como archivos estáticos en Cloudflare Pages, y proporciona una estética moderna de comida callejera mexicana.

## Arquitectura Propuesta

### Stack Tecnológico
- **HTML5** - Estructura semántica
- **Tailwind CSS (vía CDN)** - CSS utilitario para estilos modernos y responsividad
- **Alpine.js (vía CDN)** - Framework reactivo ligero para gestión del estado del carrito
- **Vanilla JavaScript** - Lógica personalizada para generación de pedidos WhatsApp
- **Sin backend** - Sitio estático desplegado en Cloudflare Pages

### ¿Por qué este Stack?
- **Cero configuración** - No requiere Node.js, npm, ni herramientas de build
- **Nativo de Cloudflare Pages** - HTML/CSS/JS estático se despliega instantáneamente
- **Rápido y ligero** - Dependencias mínimas, tiempos de carga rápidos
- **Fácil mantenimiento** - Código simple y legible sin abstracciones complejas
- **UX moderna** - Alpine.js proporciona cálculos reactivos de carrito/total sin complejidad

## Pasos de Implementación

### 1. Estructura del Proyecto
```
/
├── index.html          # Aplicación principal de página única
├── css/
│   └── custom.css      # Estilos personalizados para estética mexicana
├── js/
│   └── app.js          # Lógica de aplicación e integración WhatsApp
└── assets/
    └── images/         # Imágenes de productos (si es necesario)
```

### 2. Características Principales a Implementar

**Secciones de la Página:**
- Sección hero con marca y eslogan
- Menú de productos con variedades de elote
- Selector de tamaño (chico/mediano/grande)
- Ingredientes adicionales (mayonesa, crema, queso, chile, limón, etc.)
- Carrito de compras con gestión de artículos
- Resumen del pedido con cálculo del total
- Botón de pedido por WhatsApp

**Estructura de Datos:**
- Catálogo de productos con precios base
- Modificadores de tamaño (multiplicadores de precio)
- Ingredientes adicionales con precios
- Gestión del estado del carrito con Alpine.js

**Integración con WhatsApp:**
- Formatear detalles del pedido como mensaje estructurado
- Generar enlace de API de WhatsApp con mensaje prellenado
- Incluir todos los detalles del pedido: artículos, tamaños, ingredientes, total

### 3. Estética de Diseño
- Paleta de colores: Amarillos cálidos, naranjas, tonos tierra (maíz, especias)
- Tipografía moderna: Sans-serif limpia con carácter
- Patrones/accentos sutiles inspirados en México (no caricaturescos)
- Alto contraste para legibilidad
- Diseño responsivo mobile-first

### 4. Archivos a Crear

**index.html** (~300 líneas)
- Estructura HTML con directivas de Alpine.js
- Clases de Tailwind para layout y estilos
- Menú de productos con selectores de tamaño/ingredientes
- Display del carrito y sección de checkout

**css/custom.css** (~100 líneas)
- Variables de color personalizadas
- Elementos decorativos inspirados en México
- Ajustes responsivos
- Utilidades de animación

**js/app.js** (~150 líneas)
- Configuración de datos de productos
- Componente de Alpine.js para gestión del carrito
- Formateo de mensajes de WhatsApp
- Lógica de cálculo de precios

## Verificación
- [ ] Probar diseño responsivo en viewport móvil
- [ ] Verificar cálculos del carrito para todas las combinaciones de productos
- [ ] Probar generación de pedido WhatsApp con pedido de ejemplo
- [ ] Verificar preparación para despliegue en Cloudflare Pages
- [ ] Validar accesibilidad (navegación por teclado, lectores de pantalla)

## Riesgos/Consideraciones
- **Número de WhatsApp** - El usuario necesitará proporcionar su número de WhatsApp del negocio
- **Imágenes de productos** - Se pueden usar imágenes placeholder o assets proporcionados por el usuario
- **Sin persistencia backend** - Datos del carrito se pierden al recargar la página (aceptable para este caso de uso)
- **Dependencia CDN de Alpine.js** - Requiere conexión a internet (estándar para apps web)
