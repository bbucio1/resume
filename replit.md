# Bruno Bucio Personal Website

## Overview

This is a personal portfolio website for Bruno Bucio Chávez, a finance and business management professional. The application is built as a modern, responsive single-page application (SPA) designed to showcase Bruno's background, education, experience, and skills to potential employers in the finance and business sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store

### Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theme**: "New York" style from shadcn/ui
- **Color Scheme**: Neutral base with navy accents
- **Typography**: Inter font family
- **Layout**: Responsive design with mobile-first approach

## Key Components

### Frontend Structure
- **App.tsx**: Main application component with routing setup
- **pages/home.tsx**: Single landing page containing all sections
- **components/**: Modular section components
  - Navigation: Fixed header with smooth scrolling
  - HeroSection: Introduction and call-to-action
  - AboutSection: Professional background summary
  - EducationSection: Academic credentials
  - ExperienceSection: Work experience and achievements
  - SkillsSection: Technical, language, and soft skills
  - ContactSection: Contact information and CV download
  - Footer: Site footer

### Backend Structure
- **server/index.ts**: Express server setup with middleware
- **server/routes.ts**: API route definitions (minimal for static site)
- **server/storage.ts**: Database abstraction layer with in-memory fallback
- **server/vite.ts**: Development server integration with Vite

### Database Schema
- **users table**: Basic user entity (currently unused for static site)
- **Schema location**: `shared/schema.ts` using Drizzle ORM
- **Migration support**: Drizzle Kit for schema migrations

## Data Flow

### Static Content Architecture
- All content is hardcoded in React components (no dynamic data fetching)
- Content includes:
  - Personal information and professional summary
  - Education details with institutions and programs
  - Work experience with achievements
  - Technical skills, languages, and soft skills
  - Contact information

### User Interactions
- Smooth scrolling navigation between sections
- CV download functionality
- Responsive mobile navigation menu
- Contact links (email, phone, LinkedIn, website)

## External Dependencies

### Production Dependencies
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Component Library**: Radix UI primitives
- **Database**: Drizzle ORM with Neon PostgreSQL
- **HTTP Client**: TanStack Query for API management
- **Routing**: Wouter for client-side routing
- **Icons**: Lucide React icons
- **Utilities**: class-variance-authority, clsx, date-fns

### Development Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support
- **Database Tools**: Drizzle Kit for migrations
- **Development Server**: Express with Vite middleware

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds optimized React application
2. **Backend Build**: esbuild bundles Express server
3. **Output**: Static files in `dist/public`, server in `dist/`

### Production Configuration
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Static Files**: Served from Express server
- **Port**: Configurable via environment

### Development Setup
- **Dev Server**: Vite dev server with HMR
- **API Proxy**: Express server runs alongside Vite
- **Database**: Local PostgreSQL or Neon Database
- **Hot Reload**: Full React and TypeScript hot reload support

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables: DATABASE_URL
- Static file serving capability
- HTTPS support for production

### Security Considerations
- No user authentication required (static portfolio)
- No user input forms (reduces attack surface)
- HTTPS hosting recommended
- Environment variable protection for database credentials
- CORS configuration for production deployment

### Performance Optimizations
- Vite's built-in code splitting and optimization
- Tailwind CSS purging for minimal bundle size
- Optimized images and assets
- Smooth scrolling with proper event handling
- Responsive design for all device sizes