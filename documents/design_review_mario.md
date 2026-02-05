# Design Review & Recommendations: Mario v2

## 1. General Assessment

The current design is clean but **structurally brittle**.

- **The "Grid Trap"**: The `220px 1fr` global grid enforces a strict sidebar-like look for every section. This makes it hard to "highlight" something like `quickmodel` because it's forced into the same narrow column format as a minor hobby.
- **Absolute Positioning**: The profile photo uses `position: absolute` centered on the intersection of the sidebar and header. This looks great on screen but is a nightmare for a fluid/printable layout (it often gets cut off or overlaps text).

## 2. Specific Recommendations

### A. The "QuickModel" Highlight (New)

**Don't** just add it to the existing "Open Projects" list.
**DO**: Create a new `FeaturedProject.vue` component.

- **Placement**: Immediately after "Professional Experience" or at the top of "Other Data".
- **Style**: Allow it to span **full width** (break the grid) or use a distinct background color (e.g., a subtle code-block grey).
- **Content**: Title, NPM Badge (Image), "Visual" description (what it solves), and a QR code/Link to GitHub.

### B. Experience: "Main" vs "Other"

The user wants to split experience.

- **Main Experience (Tech)**: Keep current style (Logo + Title + Description + Tags).
- **Other Experience (Legacy)**: Create a new `CompactList.vue` component.
  - Format: Single line per entry.
  - Example: `2014-2019 | Técnico Telecomunicaciones | Ezentis` (No bullet points).
  - Visual Key: Use a lighter font color/smaller size to visually deprioritize it.

### C. Agent/SEO Optimization

- **Hidden Text**: The design uses many icons. Ensure every icon has a hidden text label or `aria-label` so an AI reading the HTML knows "Icon of Angular" means "Skill: Angular".
- **Semantic Wrappers**: Wrap the new `quickmodel` section in `<article>` and the Experience in `<section id="experience">`.

### D. Visual cleanup

- **Photo**: Move to a standard flex position (top-left or top-center) in the mobile/fluid view to avoid overlap issues.
- **Data**: The digitalized data from images (Beateam, etc.) should be stored in the new JSON structure immediately to verify length.

## 3. Action Plan Adjustment

We already touched the `implementation_plan.md`, but visually:

1.  **Refactor Layout**: First make the grid responsive/fluid.
2.  **Add `FeaturedProject`**: Insert the new component.
3.  **Split Experience**: Implement the `CompactList` for legacy jobs.
