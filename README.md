# Joshy Sánchez — Entrenador personal

Landing page de **Joshy Sánchez**, entrenador personal especializado en entrenamiento femenino (glúteos, piernas y abdomen, con foco en la técnica). Presencial 1:1 en Madrid y programa online para toda España.

## Tecnología

Sitio estático de una sola página, sin dependencias de build:

- `index.html` — toda la web (HTML + CSS + JS en un único fichero).
- `images/` — imágenes del sitio.

Detalles destacables:

- Tipografía **DM Sans** (Google Fonts).
- Diseño responsive y con animaciones de aparición al hacer scroll (respetan `prefers-reduced-motion`).
- HTML semántico y datos estructurados **JSON-LD** (`Person` + `ProfessionalService`) para mejorar la visibilidad en buscadores.

## Desarrollo local

No requiere instalación. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

Y abrir `http://localhost:8000`.

## Despliegue

Preparado para desplegarse en cualquier hosting estático (por ejemplo Vercel), con redepliegue automático en cada push a `main`.
