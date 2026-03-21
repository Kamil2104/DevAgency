# DevAgency — Tech Startup & Software House Website 🚀

A high-end, modernist corporate website built for a next-generation software house. This project is a comprehensive digital ecosystem designed to showcase the studio's capabilities, internal workflows, and flagship products like **Solomon**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
[![Deploy with Vercel](https://vercel.com/button)](https://twoj-link-z-vercela.vercel.app)

> **Project Status**: 98% Complete. This site serves as a production-ready marketing platform for a tech startup. Development was paused during the final integration phase, but the frontend architecture is fully scalable and optimized.

## ✨ Key Features

- **Strategic Service Showcase**: Detailed sections explaining the startup's expertise through components like `HowWeWork` and `WhyUs`, focusing on transparency and value delivery.
- **Product Spotlight (Solomon)**: A dedicated sub-page and integrated sections for the startup's internal product, featuring advanced modules like `LegalEfficiency` and `DataSafety`.
- **Interactive Multi-Step Lead Engine**: A custom-built contact system (`src/components/Sections/Form`) with intelligent validation, designed to gather precise project requirements from B2B clients.
- **Workflow Visualization**: Unique, animated "Creation Axes" (`ServiceCreationAxis`, `ProductCreationAxis`) that visually represent the startup's methodology from idea to deployment.
- **Modernist Visual Identity**: A strictly curated aesthetic using custom background transitions, scroll-triggered visibility hooks, and a mobile-first responsive grid.
- **Enterprise-Grade Privacy Module**: A modularly built `PrivacyPolicyPage`, reflecting the startup's focus on data security and legal compliance.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite for high-performance rendering and rapid development.
- **Typing**: Strict TypeScript for maintainable, self-documenting code.
- **Styling Strategy**: Modular CSS combined with a centralized `StylingVariables.css` system for consistent branding across all sub-pages.
- **State Management**: 
  - `FormContext`: Orchestrating complex user data across multi-step interactions.
  - `ScrollProgress`: Powering the dynamic UI transitions and header behaviors.
- **Performance Hooks**: Custom implementation of viewport detection (`useIsMobileView`) and interaction logic (`useFormVisibility`).

## 📂 Project Structure

- `src/pages/`: Core views including `HomePage`, `AboutUsPage`, and the `SolomonPage` product showcase.
- `src/components/Sections/`: Encapsulated, high-level modules like the interactive `Form` and responsive `Header`/`Footer`.
- `src/context/`: Global providers for cross-component state (Forms, Scroll tracking).
- `src/hooks/`: Business logic for UI states, responsiveness, and visibility management.
- `src/components/SmallComponents/`: Atomic elements (Buttons, Loaders, SVG assets).

## 🚦 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/startup-website.git](https://github.com/your-username/startup-website.git)
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
