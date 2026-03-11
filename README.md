# Portafolio Web

Aplicación web desarrollada con **Angular** para mostrar tu portafolio profesional: proyectos, experiencia y datos de contacto.  
Este proyecto está construido con Angular 21 y TypeScript, pensado para ser fácilmente extensible y desplegable en cualquier hosting estático o servicio de aplicaciones.

## Características

- **Framework**: Angular 21 + TypeScript  
- **Enrutamiento**: manejo de secciones del portafolio mediante `@angular/router`  
- **Estilos modernos**: maquetado responsive listo para escritorio y móvil  
- **Íconos**: integración con `lucide-angular` para iconografía ligera y escalable  

## Requisitos previos

- Node.js (recomendado: versión LTS más reciente)  
- npm (incluido con Node.js)  

Verifica tus versiones con:

```bash
node -v
npm -v
```

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <URL_DEL_REPOSITORIO>
cd Portafolio-Web
npm install
```

> Si utilizas otro gestor (como `pnpm` o `yarn`), adapta el comando de instalación según corresponda.

## Scripts disponibles

En el archivo `package.json` tienes los siguientes scripts:

- `npm start`: inicia el servidor de desarrollo (`ng serve`)  
- `npm run build`: genera el build de producción (`ng build`)  
- `npm run watch`: compila en modo desarrollo y observa cambios  
- `npm test`: ejecuta los tests unitarios con Vitest  

## Uso en desarrollo

Para levantar el servidor de desarrollo:

```bash
npm start
```

Luego abre tu navegador en `http://localhost:4200/`.  
La aplicación se recargará automáticamente cada vez que guardes cambios en el código fuente.

## Build para producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

Los artefactos se generarán en el directorio `dist/`.  
Puedes subir el contenido de esa carpeta a cualquier hosting de archivos estáticos o configurarlo en tu proveedor de despliegue (por ejemplo, Vercel, Netlify, GitHub Pages, etc.).

## Tests

Para ejecutar los tests unitarios con [Vitest](https://vitest.dev/):

```bash
npm test
```

Si posteriormente agregas pruebas end-to-end (E2E), documenta aquí los comandos y herramientas utilizadas (por ejemplo, Cypress, Playwright, etc.).

## Personalización del portafolio

Adapta el contenido del portafolio (secciones, texto, imágenes y datos de contacto) modificando los componentes en `src/app`.  
Puedes añadir nuevas páginas o secciones creando componentes y rutas adicionales con el CLI de Angular:

```bash
npx ng generate component nombre-componente
```

Consulta la documentación oficial de Angular para más detalles:  
[Documentación de Angular](https://angular.dev/)  
[Referencia de Angular CLI](https://angular.dev/tools/cli)
