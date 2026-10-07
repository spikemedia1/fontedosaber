// Escola Fonte do Saber — tokens para Tailwind CSS v3 (theme.extend).
// Gerado por gen_tokens.py a partir da mesma fonte de tokens.css/tokens.json.
// Uso (v3):  const fs = require('./tailwind.tokens.js');
//            module.exports = { content: ['./src/**/*.{astro,html,js}'],
//                               theme: { screens: fs.screens, extend: fs.extend } };
// As cores semânticas usam var(--color-*): importe tokens.css no CSS global.
// Tailwind v4: prefira mapear tokens.css com @theme inline { --color-primary: var(--color-primary); }.
// 'screens' SUBSTITUI os breakpoints padrão do Tailwind (mobile-first, min-width).
const extend = {
  "screens": {
    "sm": "480px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  },
  "colors": {
    "cream": {
      "50": "#FFFBF4"
    },
    "white": "#FFFFFF",
    "sand": {
      "100": "#FBF3E7",
      "200": "#F3E6D3",
      "300": "#E6D4BC"
    },
    "ink": {
      "400": "#7C8595",
      "500": "#5B6577",
      "700": "#34425A",
      "900": "#14233B"
    },
    "orange": {
      "50": "#FFF5EA",
      "100": "#FFE6CC",
      "200": "#FFCD99",
      "300": "#FFB366",
      "400": "#FB9D3B",
      "500": "#F5891F",
      "600": "#DB6E0A",
      "700": "#B25607",
      "800": "#8A4208",
      "900": "#5C2D07"
    },
    "yellow": {
      "50": "#FFFAE6",
      "100": "#FFF1BF",
      "200": "#FFE58A",
      "300": "#FFD84F",
      "400": "#FFCB2B",
      "500": "#F2B705"
    },
    "navy": {
      "50": "#EEF4FB",
      "100": "#D8E5F4",
      "200": "#B0C9E7",
      "300": "#7FA5D3",
      "400": "#4E7DB9",
      "500": "#2E5F9E",
      "600": "#1F4A85",
      "700": "#173B6C",
      "800": "#112E56",
      "900": "#0B2140"
    },
    "pink": {
      "100": "#FDE4EF",
      "400": "#EE5C98",
      "700": "#A82860"
    },
    "sky": {
      "100": "#E0F0FB",
      "400": "#3FA3E0",
      "700": "#1A6AA3"
    },
    "green": {
      "100": "#E3F5EA",
      "700": "#17633A"
    },
    "red": {
      "100": "#FDE8E6",
      "700": "#A1281A"
    },
    "wa-green": {
      "500": "#128C7E",
      "600": "#0F7A6E"
    },
    "bg": "var(--color-bg)",
    "bg-alt": "var(--color-bg-alt)",
    "surface": "var(--color-surface)",
    "surface-brand": "var(--color-surface-brand)",
    "surface-highlight": "var(--color-surface-highlight)",
    "surface-dark": "var(--color-surface-dark)",
    "surface-dark-alt": "var(--color-surface-dark-alt)",
    "text": "var(--color-text)",
    "text-body": "var(--color-text-body)",
    "text-muted": "var(--color-text-muted)",
    "text-on-dark": "var(--color-text-on-dark)",
    "text-on-dark-muted": "var(--color-text-on-dark-muted)",
    "text-brand": "var(--color-text-brand)",
    "text-brand-lg": "var(--color-text-brand-lg)",
    "text-accent-on-dark": "var(--color-text-accent-on-dark)",
    "link": "var(--color-link)",
    "link-hover": "var(--color-link-hover)",
    "border": "var(--color-border)",
    "border-subtle": "var(--color-border-subtle)",
    "border-strong": "var(--color-border-strong)",
    "primary": "var(--color-primary)",
    "primary-hover": "var(--color-primary-hover)",
    "primary-shadow": "var(--color-primary-shadow)",
    "on-primary": "var(--color-on-primary)",
    "secondary": "var(--color-secondary)",
    "secondary-hover-bg": "var(--color-secondary-hover-bg)",
    "on-secondary": "var(--color-on-secondary)",
    "accent": "var(--color-accent)",
    "on-accent": "var(--color-on-accent)",
    "success": "var(--color-success)",
    "success-bg": "var(--color-success-bg)",
    "warning": "var(--color-warning)",
    "warning-bg": "var(--color-warning-bg)",
    "danger": "var(--color-danger)",
    "danger-bg": "var(--color-danger-bg)",
    "info": "var(--color-info)",
    "info-bg": "var(--color-info-bg)",
    "focus": "var(--color-focus)",
    "focus-on-dark": "var(--color-focus-on-dark)",
    "whatsapp": "var(--color-whatsapp)",
    "whatsapp-hover": "var(--color-whatsapp-hover)",
    "on-whatsapp": "var(--color-on-whatsapp)",
    "event-pink": "var(--color-event-pink)",
    "event-pink-bg": "var(--color-event-pink-bg)",
    "event-sky": "var(--color-event-sky)",
    "event-sky-bg": "var(--color-event-sky-bg)",
    "pending": "var(--color-pending)",
    "pending-bg": "var(--color-pending-bg)"
  },
  "fontFamily": {
    "display": [
      "Nunito",
      "ui-rounded",
      "Segoe UI",
      "system-ui",
      "sans-serif"
    ],
    "body": [
      "Nunito Sans",
      "Segoe UI",
      "system-ui",
      "-apple-system",
      "Roboto",
      "sans-serif"
    ],
    "hand": [
      "Caveat",
      "Segoe Print",
      "Bradley Hand",
      "cursive"
    ]
  },
  "fontSize": {
    "display": [
      "clamp(2.125rem, 1.587rem + 2.3913vw, 3.5rem)",
      {
        "lineHeight": "1.1"
      }
    ],
    "h2": [
      "clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem)",
      {
        "lineHeight": "1.2"
      }
    ],
    "h3": [
      "clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem)",
      {
        "lineHeight": "1.25"
      }
    ],
    "h4": [
      "clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)",
      {
        "lineHeight": "1.25"
      }
    ],
    "lead": [
      "clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)",
      {
        "lineHeight": "1.6"
      }
    ],
    "body": [
      "1.0625rem",
      {
        "lineHeight": "1.6"
      }
    ],
    "small": [
      "0.9375rem",
      {
        "lineHeight": "1.5"
      }
    ],
    "caption": [
      "0.875rem",
      {
        "lineHeight": "1.5"
      }
    ],
    "eyebrow": [
      "0.875rem",
      {
        "lineHeight": "1.5"
      }
    ],
    "hand": [
      "clamp(1.5rem, 1.3043rem + 0.8696vw, 2rem)",
      {
        "lineHeight": "1.1"
      }
    ],
    "stat": [
      "clamp(2rem, 1.7065rem + 1.3043vw, 2.75rem)",
      {
        "lineHeight": "1.1"
      }
    ]
  },
  "fontWeight": {
    "regular": "400",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800",
    "black": "900"
  },
  "letterSpacing": {
    "tight": "-0.02em",
    "snug": "-0.01em",
    "normal": "0",
    "wide": "0.04em",
    "wider": "0.08em"
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "section": "var(--section-py)",
    "gutter": "var(--gutter)",
    "card": "var(--card-pad)",
    "tap": "var(--tap-min)"
  },
  "maxWidth": {
    "container": "1200px",
    "narrow": "760px",
    "prose": "65ch"
  },
  "borderRadius": {
    "xs": "6px",
    "sm": "10px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "pill": "999px",
    "blob": "62% 38% 54% 46% / 48% 56% 44% 52%"
  },
  "boxShadow": {
    "xs": "0 1px 2px rgba(20, 35, 59, 0.06)",
    "sm": "0 2px 6px -1px rgba(20, 35, 59, 0.08)",
    "md": "0 8px 20px -6px rgba(20, 35, 59, 0.14)",
    "lg": "0 18px 40px -12px rgba(20, 35, 59, 0.22)",
    "sticker": "0 4px 0 0 #8A4208",
    "sticker-hover": "0 6px 0 0 #8A4208",
    "sticker-active": "0 1px 0 0 #8A4208",
    "sticker-navy": "0 4px 0 0 #0B2140",
    "focus": "0 0 0 3px #FFFBF4, 0 0 0 6px #1F4A85"
  },
  "zIndex": {
    "base": "0",
    "raised": "1",
    "dropdown": "10",
    "header": "100",
    "sticky-cta": "200",
    "fab": "300",
    "cookie": "400",
    "overlay": "500",
    "skip-link": "1000"
  },
  "transitionDuration": {
    "instant": "80ms",
    "fast": "150ms",
    "base": "220ms",
    "slow": "320ms",
    "reveal": "500ms"
  },
  "transitionTimingFunction": {
    "standard": "cubic-bezier(0.2, 0, 0, 1)",
    "out": "cubic-bezier(0, 0, 0.2, 1)",
    "in": "cubic-bezier(0.4, 0, 1, 1)",
    "pop": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  },
  "opacity": {
    "disabled": "0.5",
    "decor": "0.35",
    "overlay": "0.6",
    "muted-img": "0.9"
  },
  "aspectRatio": {
    "hero": "4 / 3",
    "card": "3 / 2",
    "square": "1 / 1",
    "portrait": "4 / 5",
    "wide": "16 / 9",
    "og": "1200 / 630"
  }
};

module.exports = { extend, screens: extend.screens };
