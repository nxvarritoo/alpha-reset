# Guía sencilla para cambiar ALPHA RESET

## 1. Cambiar nombre y textos

Abre `src/config/site.ts`. Ahí están el nombre de la marca, Carlos, el titular, el subtítulo, las rutas de imágenes y el menú. Los textos de artículos y entrenamientos están en `src/data/content.ts`. La historia provisional está en `src/pages/About.tsx`.

## 2. Sustituir fotografías

Guarda las imágenes en `public/images/`. Después cambia su nombre en `src/config/site.ts`. Mantén las proporciones originales. La web utiliza actualmente `logo-alpha-reset-transparent.png` y `carlos-giral-transparent.png`, ambos con canal alfa real. Los JPEG originales se conservan como archivos fuente.

## 3. Añadir una sección

1. Crea un archivo en `src/pages/`, copiando como referencia una página sencilla.
2. Añade la ruta en `src/App.tsx`.
3. Añade su nombre y ruta en `src/config/site.ts` si debe aparecer en el menú.

## 4. Introducir entrenamientos

Edita el listado `workouts` de `src/data/content.ts`. Copia un elemento existente y cambia `id`, título, descripción, categoría, dificultad y duración. Para rutinas de la demo, usa `src/data/demo.ts`.

## 5. Añadir artículos

Edita `articles` en `src/data/content.ts` y copia un artículo existente. Usa un `id` único.

## 6. Iniciar en local

Instala Node.js 22 o una versión LTS reciente. En una terminal dentro de la carpeta:

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal. Para probar la versión final usa `npm run build` y `npm run preview`.

## 7. Subir cambios a GitHub

Después de crear el repositorio y conectarlo, ejecuta:

```bash
git add .
git commit -m "Describe aquí el cambio"
git push origin main
```

No subas archivos `.env` ni credenciales.

## 8. Publicar actualizaciones

En GitHub activa **Settings → Pages → Source: GitHub Actions**. Cada `push` a `main` ejecutará `.github/workflows/deploy.yml`. Si el proceso termina correctamente, GitHub Pages actualizará la web.

## 9. Datos guardados solo en el navegador

El objetivo personal, sesiones registradas, clientes ficticios y rutinas creadas se guardan con LocalStorage. Solo existen en ese navegador y pueden desaparecer al borrar sus datos. No son privados ni seguros y no deben contener información real.

## 10. Convertir la demo en plataforma real

Será necesario añadir Supabase u otro backend con autenticación segura, base de datos, permisos por usuario, copias de seguridad, políticas de privacidad, consentimiento y cumplimiento legal. También hará falta un servicio para enviar el formulario, dominio propio, datos de contacto reales y pruebas de seguridad. La carpeta `src/services` está preparada como punto de entrada para esa migración.
