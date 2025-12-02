🧩 Product Dashboard — Refactor & Technical Improvements

Autor: Manuel
Fecha de entrega: 3 de diciembre de 2025
Duración: 2 horas

📋 Contexto

Esta prueba técnica consistía en mejorar una aplicación base desarrollada rápidamente para una demo interna.
El objetivo era refactorizar y optimizar el código existente, priorizando los cambios más relevantes dentro de un tiempo limitado, con foco en calidad, escalabilidad y buenas prácticas.

🧠 Enfoque General

Antes de modificar el código, analicé la estructura del proyecto, los patrones de estado, la lógica de componentes y la gestión de datos desde la Fake Store API.
Mi estrategia se centró en tres pilares:

Estructura y mantenibilidad: reorganizar el proyecto con una arquitectura modular y escalable.

Tipado y robustez: migrar a TypeScript y Composition API.

Experiencia de usuario y fiabilidad: mejorar el manejo de errores, feedback visual y flujo general.

🚀 Principales Mejoras
1. Migración completa a Composition API

Reescribí componentes de Options API a Composition API para mejorar legibilidad, modularidad y reutilización.

Separé la lógica de negocio en composables (useProducts, useFilters, etc.).

Mejora clara en la cohesión y escalabilidad del código.

2. Implementación de TypeScript

Tipado completo de datos de productos, filtros y estados globales.

Prevención de errores comunes de tipo en runtime.

Integración con Vite + TS para un flujo moderno y confiable.

3. Gestión de estado con Pinia

Reemplacé el estado local disperso por Pinia como state management centralizado.

Beneficios: reactividad global, persistencia simple y mejor separación de responsabilidades.

4. Arquitectura modular y limpia

Reorganización de carpetas:

src/
├─ components/
├─ composables/
├─ stores/
├─ views/
├─ types/
├─ services/
└─ utils/


Cada módulo con responsabilidad clara y aislada.

Servicios centralizados para llamadas a la API (api/products.ts).

5. Manejo de errores y feedback global

Implementé toasts globales para informar errores y acciones exitosas.

Añadí try/catch con mensajes claros al usuario.

Mejor UX y percepción de fiabilidad.

6. UI/UX refinada

Limpieza visual y jerarquía de información.

Ajustes de diseño responsivo y consistencia de estilos.

Filtros y botones con mejor accesibilidad.

7. Optimización de rendimiento

Uso de computed y watchEffect para reducir renders innecesarios.

Lazy loading de componentes no críticos.

Eliminación de dependencias innecesarias.

8. Buenas prácticas generales

Nombres consistentes y descriptivos.

Convenciones de código limpias (ESLint + Prettier).

Comentarios mínimos y claros donde era necesario.

🧪 Qué haría con más tiempo

Si el tiempo lo permitiera, continuaría con:

Implementar test unitarios y de integración (Vitest / Cypress).

Añadir caching local para mejorar performance.

Mejorar la UI con un diseño más product-ready (tema oscuro, animaciones sutiles, accesibilidad AAA).

Internacionalización (i18n).

Configurar CI/CD y workflows automáticos de lint + test.

🧩 Resultado Final

El resultado es una aplicación:

Más limpia, escalable y robusta.

Lista para entornos reales con una base técnica sólida.

Fácil de mantener, extender y comprender por cualquier equipo futuro.

🗂 Archivos Entregados

PDF — Documentación de Mejoras (IMPROVEMENTS.md)
Explicación detallada de decisiones, prioridades y justificación técnica.

GitHub / ZIP — Proyecto Refactorizado
Código fuente completo, listo para ejecutar con:

npm install
npm run dev


Disponible en http://localhost:3000.

💬 Conclusión

Este refactor demuestra un enfoque pragmático y profesional al equilibrar calidad técnica, claridad de código y experiencia de usuario, dentro del tiempo establecido.
