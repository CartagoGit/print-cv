# PDF Generation Refactor Walkthrough

We have successfully refactored the PDF generation process to utilize native browser printing, removing heavy dependencies and improving the user experience with a faithful print preview.

## Key Changes

### 1. Native Printing (`window.print()`)
Refactored `src/shared/helpers/file.helper.ts` to remove `html2canvas` and `jspdf`. The `generatePDF` function now simply calls `window.print()`, leveraging the browser's optimized print engine.

### 2. WYSIWYG Print Preview
Implemented a **"Simulation Mode"** in `App.vue`:
- New **PREVIEW** button in the sidebar.
- Toggling this mode applies the `.print-mode` class.
- The view mimics an A4 sheet (210mm width, white background, shadow) within the application.
- **Zoom Supported**: Users can now use the zoom controls to inspect the print layout in detail (`transform: scale(...)` enabled in preview).

### 3. Tailwind CSS Integration
- Installed and configured **Tailwind CSS v4** with PostCSS.
- Replaced inline styles in `App.vue` with utility classes (via `@apply` in `.sidebar-preview-btn`).
- This sets the foundation for a cleaner, more maintainable UI.

### 4. Verification & Quality
- **TDD**: Created `src/__tests__/print-mode.spec.ts` to verify the toggle logic and native print call.
- **Validation Pipeline**: Added `npm run validate` script (Lint + TypeCheck + Test) and updated Agent Rules to enforce its usage.
- All tests are passing.

## Verification Results

### Automated Tests
Run `npm run validate` to confirm:
- `eslint`: Clean.
- `vue-tsc`: Clean.
- `vitest`: 3/3 tests passed (Sanity + Print Mode).

### Manual Verification
1. Click **PREVIEW** in the sidebar.
   - Verify the view transforms into an A4 sheet.
   - Test Zoom In/Out to inspect details.
2. Click **PDF** icon.
   - Verify the native print dialog opens.
   - Ensure the preview in the dialog matches the content.

## Dependency Cleanup
Removed:
- `html2canvas`
- `jspdf`

## Code Snippets

### App.vue (Preview Logic)
```typescript
const togglePrintMode = () => {
  isPrintMode.value = !isPrintMode.value;
};
```

### CSS (Native Print)
```css
@media print {
  body, .app-wrapper {
    display: block !important;
    background: white !important;
  }
  aside, header, .is-loading {
    display: none !important;
  }
  #curriculum {
    transform: none !important;
    width: 100% !important;
    // ...
  }
}
```
