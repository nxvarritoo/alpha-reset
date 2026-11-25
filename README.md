# ALPHA RESET

Web profesional de marca personal de **Carlos Giral**, creada con React, Vite, TypeScript y Tailwind CSS. Incluye web pública, área de cliente de demostración y panel de entrenador de demostración.

## Inicio rápido

```bash
npm install
npm run dev
```

Compilación de producción:

```bash
npm run build
npm run preview
```

## Contenido editable

- Marca, navegación, imágenes y datos de contacto: `src/config/site.ts`
- Entrenamientos y artículos: `src/data/content.ts`
- Rutinas, sesiones y clientes ficticios: `src/data/demo.ts`
- Colores y estilos globales: `tailwind.config.js` y `src/styles/index.css`

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica automáticamente desde la rama `main`. En GitHub, activa **Settings → Pages → Source: GitHub Actions**. Vite usa recursos relativos, compatibles con cualquier nombre de repositorio, y la navegación usa `HashRouter`.

## Importante

Las áreas de cliente y entrenador son demostraciones estáticas. No existe autenticación ni servidor. LocalStorage no debe utilizarse con datos personales reales. Consulta [GUIA_CAMBIOS.md](./GUIA_CAMBIOS.md) para mantener el proyecto.
