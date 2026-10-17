# Joshy Sánchez — Entrenador personal

Landing page de **Joshy Sánchez**, entrenador personal especializado en entrenamiento femenino (glúteos, piernas y abdomen, con foco en la técnica). Entrenamiento solo online: programa +Forma +Fuerza para toda España, desde Madrid.

## Tecnología

Sitio estático, sin dependencias de build:

- `index.html` — la home.
- `programa/index.html` — página del programa +Forma +Fuerza (`/programa/`).
- `styles.css` y `main.js` — estilos y scripts compartidos por todas las páginas.
- `images/` — imágenes del sitio.
- `sitemap.xml` y `robots.txt` — descubrimiento para buscadores.

Para añadir una página nueva, crea `carpeta/index.html` enlazando `../styles.css` y `../main.js`, y añádela a `sitemap.xml`.

Detalles destacables:

- Tipografía **DM Sans** (Google Fonts).
- Diseño responsive y con animaciones de aparición al hacer scroll (respetan `prefers-reduced-motion`).
- HTML semántico y datos estructurados **JSON-LD** (`Person` + `ProfessionalService` en la home; `Service`, `BreadcrumbList` y `FAQPage` en `/programa/`) para mejorar la visibilidad en buscadores.

## Desarrollo local

No requiere instalación. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

Y abrir `http://localhost:8000`.

## Despliegue

Preparado para desplegarse en cualquier hosting estático (por ejemplo Vercel), con redepliegue automático en cada push a `main`.
