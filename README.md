# Solomon — AI-Powered Legal & Business Intelligence ⚖️

A high-end, conversion-focused platform designed for a legal-tech startup. This project showcases a "Corporate Minimalist" aesthetic, focusing on data clarity, intuitive user flow, and high-performance animations.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
[![Deploy with Vercel](https://vercel.com/button)](https://twoj-link-z-vercela.vercel.app)

> **Project Status**: 98% Complete. Development paused due to startup restructuring. This repository serves as a showcase of a production-ready frontend architecture.

## ✨ Key Features

- **Product Showcase (Solomon)**: Dedicated product pages highlighting complex functionalities like `LegalEfficiency`, `IntuitiveDesign`, and `DataSafety`.
- **Interactive Form Engine**: A sophisticated multi-step contact and requirement gathering system (`src/components/Sections/Form`) with real-time validation and custom error handling.
- **Context-Aware Navigation**: A custom-built Header that manages visibility and transitions based on user scroll behavior (`useFormVisibility`).
- **Dynamic Background Transitions**: Smooth, scroll-triggered aesthetic shifts using a dedicated `BackgroundTransition` component to maintain visual engagement.
- **Process Visualization**: Detailed "How We Work" and "Service Creation Axis" components that translate abstract backend processes into clear, linear user journeys.
- **Privacy-First Architecture**: Built-in comprehensive Privacy Policy modules and data safety characteristics, reflecting the startup's commitment to legal standards.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite for rapid development and optimized bundling.
- **Typing**: Strict TypeScript implementation for enterprise-grade stability and developer experience.
- **Styling**: Modular CSS approach with a centralized `StylingVariables.css` system, ensuring design tokens are consistent across all sub-pages.
- **State Management**: Context API (`FormContext`, `ScrollProgress`) used to manage global application state without the overhead of heavy external libraries.
- **Animations**: Custom CSS transitions and logic-driven visibility hooks for a lightweight, performant feel.

## 📂 Project Structure

The architecture follows a strictly modular and responsive-first pattern:

- `src/pages/`: Multi-page routing including `HomePage`, `SolomonPage`, `AboutUsPage`, and `PrivacyPolicyPage`.
- `src/context/`: Global providers managing form data and scroll-based progress tracking.
- `src/components/SmallComponents/`: Atomic elements like `Loader`, `Button`, and `ScrollDownSign`.
- `src/hooks/`: Custom hooks for viewport detection (`useIsMobileView`) and form logic.
- `src/components/Sections/`: Heavy-duty, reusable sections (Header, Footer, Form) with encapsulated styles and business logic.

## 🚦 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/solomon-startup.git](https://github.com/your-username/solomon-startup.git)
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev

