# Lista de Tareas (Tasks)

> **AGENT REMINDER**: Check `.cursorrules` or `.windsurfrules` -> Go to `documents/AGENT_RULES.md`.

---

- [ ] **Setup Quality Tools** <!-- id: 0 -->
    - [ ] Instalar ESLint y Prettier.
    - [ ] Configurar reglas.
    - [ ] Ejecutar fix automático.
- [ ] **Setup Test Infrastructure (Vitest)** <!-- id: 5 -->
    - [ ] Configurar Vitest.
    - [ ] Asegurar que `npm run test` funciona correctamente.
- [ ] **Refactor: PDF Generation** <!-- id: 1 -->
    - [ ] **TDD**: Crear test unitario/mock del generador antes de implementar modulos.
    - [ ] **WYSIWYG Preview**: Implementar modo "Simulación de Impresión" en pantalla (clase `.print-mode`).
    - [ ] **Zoom**: Mejorar lógica de escalado para inspección detallada (pixel-perfect).
    - [ ] Implementar CSS `@media print`.
    - [ ] Eliminar dependencias innecesarias.
- [ ] **Refactor: Layout** <!-- id: 2 -->
    - [ ] **Tests**: Verificar snapshots o estructura antes de cambios mayores.
    - [ ] Convertir layout a fluido.
    - [ ] Ajustar `break-inside`.
- [ ] **Refactor: Data Layer** <!-- id: 3 -->
    - [ ] **TDD**: Crear test de carga de JSON.
    - [ ] Mover datos a JSON.
- [ ] **Content Update** <!-- id: 5 -->
    - [ ] **Highlight**: Destacar `quickmodel` al inicio de la sección "Librerías/Proyectos" con descripción detallada.
    - [ ] **Refactor Experience**: Dividir en "Experiencia Principal" (Detallada) y "Otros Trabajos" (Resumida).
    - [ ] **Data Entry**: Digitalizar info de las capturas (Beateam, Ezentis, Hispatel).
    - [ ] **Cleanup**: Evaluar y eliminar apartados obsoletos tras el rediseño.
- [ ] **Agent Readability (SEO for AI)** <!-- id: 6 -->
    - [ ] Implementar JSON-LD (`Schema.org/Person` + `CV`).
    - [ ] Usar etiquetas semánticas HTML5 precisas (`<article>`, `<time>`).
