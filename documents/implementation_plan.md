# Plan de Implementación (Implementation Plan)

> **REGLA IMPORTANTE PARA AGENTES:**
> 1.  **Pensamiento y Explicaciones**: SIEMPRE en **ESPAÑOL**.
> 2.  **Código, Variables y JSDoc**: SIEMPRE en **INGLÉS**.
> 3.  **Nombres de Archivos**: SIEMPRE en **INGLÉS**.
> 4.  **Prioridad**: User > Tests > Code.
> 5.  **Privacidad**: NUNCA exponer datos personales (teléfono) en builds públicas.



Este documento detalla la estrategia técnica para modernizar `print-cv`.

## 1. Quality Assurance (ESLint + Prettier)
**Objetivo**: Codebase limpio y consistente.
-   **Acción**: Instalar `eslint-plugin-vue`, `@vue/eslint-config-typescript`.
-   **Config**: Asegurar que no haya conflictos con Prettier.
-   **Naming Convention**: Forzar camelCase para variables y PascalCase para componentes.

## 2. Test Infrastructure & TDD Setup
**Objetivo**: Preparar el terreno para Test Driven Development.
-   **Herramienta**: Vitest.
-   **Acción**:
    -   Instalar `vitest`.
    -   Configurar script `test` en `package.json`.
    -   **Regla**: A partir de este punto, todo cambio requiere un test previo.

## 3. Refactor: Native Browser Print
**Objetivo**: Generar PDFs accesibles (texto seleccionable) y ligeros.
-   **Estrategia actual**: `html2canvas` (Imagen bitmap, mala calidad).
-   **Nueva estrategia**: CSS Print.
    -   Definir `@media print`.
    -   Ocultar sidebar y botones (`display: none`).
    -   Ajustar márgenes y colores para ahorro de tinta (opcional, aunque es un CV digital principalmente).
-   **Visualización (Zoom & Preview)**:
    -   **Simulación**: Crear una clase CSS `.print-preview` que fuerce los estilos de impresión en la vista web.
    -   **Zoom Engine (Fixed A4)**: El contenedor del CV tendrá dimensiones fijas (A4: 210mm x 297mm). El zoom será puramente visual (`transform: scale()`), escalando "la hoja" entera sin alterar su maquetación interna (no reflow), garantizando que lo que ves es exactamente lo que se imprime.

## 4. Refactor: Responsive/Fluid Layout
**Objetivo**: Eliminar la deuda técnica de "Página 1 / Página 2".
-   **Problema**: El componente `MarioCv.vue` tiene divs hardcoded para las páginas.
-   **Solución**:
    -   Un solo contenedor `main` fluido.
    -   CSS: `section { break-inside: avoid; page-break-inside: avoid; }`.
    -   Dejar que el navegador decida dónde cortar la hoja.

## 5. Data Separation
**Objetivo**: Desacoplar contenido (datos del usuario) del código fuente.
-   **Acción**:
    -   Crear `src/data/<profile>/cv-data.json`.
    -   Importar este JSON en los componentes.
    -   Esto facilita futuras integraciones con APIs o edición por no-programadores.

## 6. Content Strategy: "Human & Machine"
**Objetivo**: Destacar lo valioso (`quickmodel`) y limpiar el ruido.
-   **QuickModel**: Posicionarlo como el **primer ítem destacado** en la sección de "Librerías/Proyectos", explicando detalladamente sus funcionalidades y valor.
-   **Experiencia**:
    -   *Tech*: Detalle completo (Beateam, Freelance).
    -   *Legacy/Other*: Lista compacta (Técnico Telecomunicaciones).
-   **Fuente de Datos**: Digitalizar manualmente los datos de las imágenes aportadas.

## 7. Agent Readability (SEO for AI)
**Objetivo**: Que agentes de recruiting (o IAs) parseen el CV perfectamente.
-   **Estrategia**:
    -   **JSON-LD**: Incluir un bloque `<script type="application/ld+json">` con el Resume estructurado según Schema.org.
    -   **Hidden Raw Data**: Exponer el JSON crudo en un atributo `data-cv-source` o similar.
    -   **Privacy Shield (Anti-Spam)**:
        -   Usar variables de entorno (`VITE_PUBLIC_MODE=true`).
        -   Si es público: Reemplazar teléfono/email por enlace a LinkedIn o Formulario.
        -   JSON-LD no incluirá `telephone` en modo público.

## 8. Final Enhancements
**Objetivo**: Calidad Premium y Automatización.
-   **QR Codes (Print Only)**: Componente que genera QRs junto a enlaces importantes, visible solo con `@media print`.
-   **Data Validation**: Schemas de **Zod** para asegurar que el JSON del CV es válido (no rompe la build si falta un campo).
-   **CI/CD**: Deploy automático a GitHub Pages (en modo `VITE_PUBLIC_MODE=true`).
-   **Web Polish**:
    -   **Open Graph**: Imagen de previsualización y descripción para compartir en redes.
    -   **Filename Strategy**: `document.title = "Mario_Cabrero_CV.pdf"` al entrar en modo impresión implícitamente ayuda al navegador a nombrar el archivo.
    -   **Live Social Proof**: Fetch de descargas NPM para `quickmodel` (si la API falla, fallback a static).
    -   **A11y Audit**: Pasar Lighthouse para asegurar que es accesible (screen readers = recruiter bots).


