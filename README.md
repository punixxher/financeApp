# 🧾 Dashboard Financiero - Next.js

Este proyecto es una aplicación web construida con **Next.js**, diseñada para mostrar información financiera de forma clara y modular. Está estructurado siguiendo buenas prácticas de arquitectura (Domain Driven Design - DDD) y una organización limpia de componentes.

## 🚀 Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- Arquitectura basada en capas (Dominios, Casos de Uso, Infraestructura)

## 📁 Estructura del Proyecto

```bash
src/
├── app/                  # Entradas de páginas Next.js (layout, page)
├── application/          # Casos de uso (lógica de negocio)
├── components/           # Componentes reutilizables (UI y layout)
├── constants/            # Constantes globales
├── domains/              # Entidades, servicios, repositorios (DDD)
├── infrastructure/       # Implementaciones concretas (API, bases de datos, etc.)
├── lib/                  # Utilidades generales
├── styles/               # Estilos globales
├── types/                # Tipado global o compartido

## Security

Static analysis for this repository is run by a
[Cortex](https://github.com/VektCore/cortex) server outside it: nothing is
installed here — no workflow, no scanners, no configuration. A push webhook on
`master` is what starts a scan.

<!-- sast: off-repository analysis, run 2026-08-27T14:59Z -->

<!-- sast run: 2026-08-27T15:12:08Z -->
