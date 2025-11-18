import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: "#15608F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(2,6,23,0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            fontFamily: 'var(--font-poppins)',
            maxWidth: 'none',
            h1: {
              color: theme('colors.brand'),
              fontWeight: '700',
              fontFamily: 'var(--font-poppins)',
            },
            h2: {
              color: theme('colors.brand'),
              fontWeight: '600',
              fontFamily: 'var(--font-poppins)',
            },
            h3: {
              color: theme('colors.brand'),
              fontWeight: '600',
              fontFamily: 'var(--font-poppins)',
            },
            h4: {
              color: theme('colors.brand'),
              fontWeight: '600',
              fontFamily: 'var(--font-poppins)',
            },
            strong: {
              color: theme('colors.brand'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.brand'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
                color: '#124E75',
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.brand'),
              color: theme('colors.gray.600'),
              fontStyle: 'italic',
              backgroundColor: theme('colors.gray.50'),
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.brand'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            img: {
              borderRadius: '0.75rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'),
            h1: {
              color: theme('colors.white'),
              fontFamily: 'var(--font-poppins)',
            },
            h2: {
              color: theme('colors.white'),
              fontFamily: 'var(--font-poppins)',
            },
            h3: {
              color: theme('colors.white'),
              fontFamily: 'var(--font-poppins)',
            },
            h4: {
              color: theme('colors.white'),
              fontFamily: 'var(--font-poppins)',
            },
            strong: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.brand'),
              '&:hover': {
                color: '#1B7AB8',
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.brand'),
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.gray.800') + '/50',
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.brand'),
            },
            pre: {
              backgroundColor: theme('colors.gray.950'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
