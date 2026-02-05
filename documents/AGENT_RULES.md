# AGENT RULES / REGLAS PARA AGENTES

Este archivo define las reglas de comportamiento para cualquier agente de IA (Cursor, Windsurf, Copilot, etc.) que trabaje en este repositorio.

## 1. Protocolo de Idioma (Language Protocol)

Es la regla más importante:

- **RAZONAMIENTO Y COMUNICACIÓN**: El agente debe pensar, razonar y explicar sus cambios al usuario en **ESPAÑOL**.
- **CÓDIGO Y ARTEFACTOS TÉCNICOS**:
  - Nombres de variables, funciones, clases: **INGLÉS** (ej: `getUserData`, no `obtenerDatosUsuario`).
  - Comentarios de código (JSDoc): **INGLÉS**.
  - Mensajes de Commit: **INGLÉS** (Imperativo, ej: `feat: add print styles`, no `agregando estilos de impresion`).
  - Nombres de archivos: **INGLÉS** (ej: `tasks.md`, no `tareas.md`).

## 2. Flujo de Trabajo (Workflow)

1.  **Leer**: Antes de empezar, leer `documents/implementation_plan.md` y `documents/tasks.md`.
2.  **Actualizar**: Si completas una tarea, marca el checkbox en `tasks.md`.
3.  **Validar**: No asumas que el código funciona. Verifica tipos (TypeScript) y linting.
4.  **PIPELINE DE SEGURIDAD**: Al finalizar cualquier tarea, EJECUTA `npm run validate`. Este script corre Linter, Typecheck y Tests. Si falla, **ARREGLALO** antes de seguir. No entregues código roto.

## 3. Stack Tecnológico

- **Framework**: Vue 3 (Composition API, `<script setup lang="ts">`).
- **Build Tool**: Vite.
- **Estilos**: SCSS / Sass.
- **Estado**: `ref` / `reactive` (evitar Vuex/Pinia para este scope pequeño a menos que sea necesario).

## 4. Mentalidad "Agentic"

- Sé proactivo. Si ves un error obvio (typo, bug), corrígelo.
- Mantén el código limpio (Clean Code).
- Prioriza la simplicidad.

## 5. Protocolo de Testing (TDD & Legacy)

Obligatorio para cualquier cambio de código:

1.  **SIEMPRE HAY TESTS**: No se acepta código sin tests.
2.  **Para código NUEVO (TDD)**:
    - Escribe el test **ANTES** que el código.
    - Verifica que falla (RED).
    - Implementa el código mínimo para pasar el test (GREEN).
    - Refactoriza si es necesario (REFACTOR).
3.  **Para código EXISTENTE (Legacy)**:
    - Antes de tocar nada, crea un test que cubra la funcionalidad actual (aunque sea básico).
    - Asegura que el test pasa.
    - Realiza tus cambios.
    - Verifica que el test sigue pasando.
