# Instrucciones de mantenimiento — ALPHA RESET

## Finalidad

Esta es la web de marca personal de Carlos Giral. Debe mantener a Carlos como protagonista, con una estética deportiva, profesional, cercana y minimalista. No debe parecer una cadena de gimnasios.

## Stack

React + Vite, TypeScript, Tailwind CSS, React Router (`HashRouter`), Lucide React, Recharts y LocalStorage únicamente para la demo.

## Organización

- `src/config/site.ts`: identidad, textos principales, imágenes, contacto y menú.
- `src/data/`: contenido público y datos ficticios de demo.
- `src/components/`: componentes reutilizables.
- `src/layouts/`: cabecera/pie públicos y shell de dashboards.
- `src/pages/`: páginas y vistas de dashboard.
- `src/services/storage.ts`: claves locales y punto de sustitución futuro.
- `public/images/`: logo y fotografía oficiales.

## Cómo ampliar

Para añadir una sección pública, crea una página en `src/pages`, registra su ruta en `src/App.tsx` y, si corresponde, añade el enlace en `src/config/site.ts`. Reutiliza `SectionHeading`, `ButtonLink` y las clases de componentes definidas en `src/styles/index.css`.

Los textos, artículos, entrenamientos, ejercicios y rutinas deben modificarse preferentemente en los archivos de configuración o datos; evita duplicarlos dentro de componentes.

## Identidad visual

Usa azul marino `#071629`, turquesa `#17B9AD`, blanco y gris `#F4F6F8`. No modifiques ni redibujes el logo. Usa los PNG transparentes configurados en `src/config/site.ts`; conserva los JPEG originales como fuentes. Mantén la proporción de la foto oficial de Carlos y no la sustituyas por stock.

## Límites de la demo

`/mi-espacio` y `/demo/entrenador` no tienen autenticación, privacidad ni base de datos. Sus datos son ficticios y LocalStorage solo conserva cambios en el navegador. No introducir ni gestionar datos personales reales. El formulario de contacto no envía mensajes.

## Backend futuro

Autenticación, usuarios, datos personales, sincronización multidispositivo, envío de formularios, permisos, archivos y registros reales requieren un backend seguro (previsto: Supabase), políticas de acceso, consentimiento y cumplimiento normativo. Sustituye gradualmente `src/services/storage.ts` por servicios remotos sin acoplar las vistas al proveedor.

## Verificación

Tras cada cambio relevante ejecuta `npm run build` y `npm run lint`. Comprueba navegación por teclado, móvil y preferencias de movimiento reducido. No añadas promesas de resultados, credenciales profesionales ni datos de contacto no confirmados.
