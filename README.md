# MagMag Microfrontend Application

A modern microfrontend architecture built with React, Vue.js, and Webpack Module Federation. This project demonstrates how to build scalable, independently deployable frontend applications using the microfrontend pattern.

## 🏗️ Architecture Overview

This project consists of four main applications:

- **Container** (Port 8000) - The main shell application that orchestrates all microfrontends
- **Auth** (Port 8002) - Authentication microfrontend (React)
- **Marketing** (Port 8001) - Marketing pages microfrontend (React)
- **Dashboard** (Port 8003) - Dashboard microfrontend (Vue.js)

## 🚀 Features

- **Module Federation**: Each microfrontend is independently deployable
- **Multi-Framework Support**: React and Vue.js applications working together
- **Shared Dependencies**: Optimized bundle sharing across microfrontends
- **Routing Integration**: Seamless navigation between microfrontends
- **Authentication State Management**: Centralized auth state across all apps
- **Modern UI**: Built with Tailwind CSS and PrimeVue components
- **TypeScript Support**: Full TypeScript support across all applications

## 📁 Project Structure

```
microfrontend/
├── container/          # Main shell application (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.tsx        # Auth microfrontend wrapper
│   │   │   ├── Dashboard.tsx   # Dashboard microfrontend wrapper
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Loading.tsx     # Loading component
│   │   │   └── Marketing.tsx   # Marketing microfrontend wrapper
│   │   ├── hooks/
│   │   │   └── useAuth.ts      # Authentication context hook
│   │   ├── utils/
│   │   │   └── routeUtils.ts   # Routing utilities
│   │   ├── App.tsx             # Main app component
│   │   └── bootstrap.tsx       # Application bootstrap
│   └── webpack/                # Webpack configurations
├── auth/               # Authentication microfrontend (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.tsx       # Login component
│   │   │   └── SignUp.tsx      # Sign up component
│   │   ├── App.tsx             # Auth app component
│   │   └── bootstrap.tsx       # Auth bootstrap
│   └── webpack/                # Webpack configurations
├── marketing/          # Marketing microfrontend (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Landing.tsx     # Landing page
│   │   │   ├── Pricing.tsx     # Pricing page
│   │   │   └── Copyright.tsx   # Copyright component
│   │   ├── App.tsx             # Marketing app component
│   │   └── bootstrap.tsx       # Marketing bootstrap
│   └── webpack/                # Webpack configurations
└── dashboard/          # Dashboard microfrontend (Vue.js + TypeScript)
    ├── src/
    │   ├── components/
    │   │   └── Dashboard.vue   # Main dashboard component
    │   └── bootstrap.tsx       # Dashboard bootstrap
    └── webpack/                # Webpack configurations
```

## 🛠️ Technology Stack

### Container Application
- **React 19.1.0** - UI framework
- **React Router DOM 7.7.0** - Client-side routing
- **TypeScript 5.5.0** - Type safety
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Webpack 5.100.2** - Module bundler with Module Federation

### Auth Microfrontend
- **React 19.1.0** - UI framework
- **React Router 5.2.0** - Routing
- **TypeScript 5.5.0** - Type safety
- **Tailwind CSS 4.1.11** - Styling

### Marketing Microfrontend
- **React 19.1.0** - UI framework
- **React Router 5.2.0** - Routing
- **TypeScript 5.5.0** - Type safety
- **Tailwind CSS 4.1.11** - Styling

### Dashboard Microfrontend
- **Vue.js 3.5.17** - UI framework
- **PrimeVue 4.3.6** - UI component library
- **Chart.js 4.5.0** - Data visualization
- **TypeScript 5.5.0** - Type safety
- **Sass 1.89.2** - CSS preprocessor

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd microfrontend
   ```

2. **Install dependencies for all applications**
   ```bash
   # Install container dependencies
   cd container && npm install && cd ..

   # Install auth dependencies
   cd auth && npm install && cd ..

   # Install marketing dependencies
   cd marketing && npm install && cd ..

   # Install dashboard dependencies
   cd dashboard && npm install && cd ..
   ```

### Development

To run the application in development mode, you need to start all microfrontends simultaneously:

1. **Start the Container application** (Port 8000)
   ```bash
   cd container
   npm start
   ```

2. **Start the Auth microfrontend** (Port 8002)
   ```bash
   cd auth
   npm start
   ```

3. **Start the Marketing microfrontend** (Port 8001)
   ```bash
   cd marketing
   npm start
   ```

4. **Start the Dashboard microfrontend** (Port 8003)
   ```bash
   cd dashboard
   npm start
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`
   - The container will automatically load the appropriate microfrontends

### Production Build

To build all applications for production:

```bash
# Build container
cd container && npm run build && cd ..

# Build auth
cd auth && npm run build && cd ..

# Build marketing
cd marketing && npm run build && cd ..

# Build dashboard
cd dashboard && npm run build && cd ..
```

## 🔧 Configuration

### Module Federation Setup

Each microfrontend is configured with Webpack Module Federation:

- **Container**: Consumes remote modules from other microfrontends
- **Auth**: Exposes `./AuthApp` module
- **Marketing**: Exposes `./MarketingApp` module  
- **Dashboard**: Exposes `./DashboardApp` module

### Port Configuration

- Container: `http://localhost:8000`
- Marketing: `http://localhost:8001`
- Auth: `http://localhost:8002`
- Dashboard: `http://localhost:8003`

## 📝 Available Scripts

Each microfrontend supports the following scripts:

- `npm start` - Start development server
- `npm run build` - Build for production