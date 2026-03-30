# Proyecto de Automatización de Pruebas con Playwright - Toolshop

Este repositorio contiene un framework de automatización de pruebas para el sitio web de demostración "Toolshop", construido con Playwright y TypeScript, aplicando las mejores prácticas de la industria.

## 📖 ¿En qué consiste?

El objetivo principal de este proyecto es servir como un ejemplo práctico y robusto de cómo estructurar un proyecto de automatización de pruebas de UI (End-to-End). Se enfoca en la claridad, mantenibilidad y escalabilidad del código, utilizando patrones de diseño como el **Page Object Model (POM)** y las **Fixtures** de Playwright para una gestión eficiente de las dependencias.

Las pruebas se ejecutan contra un entorno de demostración, simulando interacciones de usuario reales para garantizar la calidad y el correcto funcionamiento de la aplicación web.

## Repositorio(s) guia(s):

- learning-playwright-5911873: https://github.com/LinkedInLearning/learning-playwright-5911873.git
- playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224: https://github.com/LinkedInLearning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224.git

---

## ✨ Features Implementados

- **Framework de Pruebas Robusto**: Basado en Playwright y TypeScript para aprovechar el tipado estático y mejorar la calidad del código.
- **Patrón de Diseño Page Object Model (POM)**:
  - Separación clara de la lógica de las páginas (`src/po/pages`), componentes reutilizables (`src/po/components`) y los casos de prueba.
  - Facilita el mantenimiento y reduce la duplicación de código.
- **Fixtures de Playwright**:
  - Inyección de dependencias de las instancias de las páginas (Page Objects) directamente en los tests (`src/po/tests/fixtures.ts`).
  - Reduce el código repetitivo (boilerplate) en los archivos de prueba y centraliza la creación de objetos.
- **Integración Continua (CI) con GitHub Actions**:
  - Workflow (`playwright.yml`) que se ejecuta automáticamente en cada `push` y `pull request` a la rama principal.
  - Permite la ejecución manual de las pruebas (`workflow_dispatch`).
- **Pruebas Cross-Browser**:
  - Ejecución paralela de la suite de pruebas en múltiples navegadores (`Chromium` y `Firefox`) para garantizar la compatibilidad.
- **Optimización de CI**:
  - Uso de `npm ci` para instalaciones más rápidas y deterministas.
  - Implementación de **caché para los navegadores de Playwright**, reduciendo significativamente los tiempos de ejecución en el pipeline.
- **Reportes de Pruebas Automatizados**:
  - Generación del reporte HTML de Playwright.
  - Publicación automática de los reportes como artefactos en GitHub Actions, con un periodo de retención de 30 días para su análisis.

---

## 🛠️ Tech Stack

| Área                     | Tecnología     |
| ------------------------ | -------------- |
| **Lenguaje**             | TypeScript     |
| **Framework E2E**        | Playwright     |
| **Entorno de ejecución** | Node.js (v22)  |
| **Gestor de Paquetes**   | npm            |
| **CI/CD**                | GitHub Actions |

---

## 📋 Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- **Node.js**: Se recomienda la versión `22.x` o superior. Puedes descargarlo desde nodejs.org.
- **NPM**: Generalmente se instala junto con Node.js.

---

## 🚀 Cómo ejecutar el proyecto

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/dacanass/toolshop-pw.git
    cd toolshop-pw
    ```

2.  **Instalar dependencias:**
    Se recomienda usar `npm ci` para asegurar que se instalan las versiones exactas del archivo `package-lock.json`.

    ```bash
    npm ci
    ```

3.  **Instalar los navegadores de Playwright:**
    Este comando descarga los navegadores necesarios para ejecutar las pruebas.

    ```bash
    npx playwright install --with-deps
    ```

4.  **Ejecutar las pruebas:**
    Este comando ejecutará todos los tests en todos los navegadores configurados.

    ```bash
    npx playwright test --config=src/config/playwright.config.ts
    ```

    - Para ejecutar en un navegador específico (p. ej., `chromium`):
      ```bash
      npx playwright test --config=src/config/playwright.config.ts --project=chromium
      ```

5.  **Ver el reporte de resultados:**
    Una vez finalizada la ejecución, puedes abrir el reporte HTML para ver los resultados detallados.
    ```bash
    npx playwright show-report
    ```

---

## 🎯 Objetivos de Aprendizaje

Este proyecto está diseñado para ser una guía y un campo de práctica sobre:

- ✅ **Aplicar el Page Object Model** de forma efectiva para crear un framework de pruebas escalable.
- ✅ **Dominar el uso de Fixtures** en Playwright para la inyección de dependencias y la reducción de código repetitivo.
- ✅ **Configurar un pipeline de CI/CD** desde cero con GitHub Actions, incluyendo jobs, matrices de ejecución y artefactos.
- ✅ **Implementar estrategias de caché** para optimizar los tiempos de ejecución en la Integración Continua.
- ✅ **Escribir pruebas E2E limpias, legibles y mantenibles** utilizando las mejores prácticas de Playwright y TypeScript.
- ✅ **Entender y solucionar los desafíos de las pruebas cross-browser** en un entorno automatizado.

## 🧪 Quality Assurance

To ensure full coverage of the ToolShop requirements, I maintain a
live traceability matrix:

- [View Requirements Traceability Matrix (RTM)](./docs/RTM.md)
