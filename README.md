# Skydome2.0

A modern, full-stack ecommerce website for buying different products built with React.

## 🚀 Features

- sign up
- login in
- responsive UI
- search functionality
- loader
- general product section
- laptop product section
- phone product section
- shoe product section
- cloth product section
- filter functionality
- global state management with redux toolkit
- integration with a backend for payment functionality using paystack


## 📋 Prerequisites

- Node.js 14+ 
- npm or yarn


## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone hhttps://github.com/tobiayinmiro23/skydome2.0.git
   ```

2. **Enter the directory**
   ```bash
   cd skydome2.0
   ```
   
3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run start
   ```

## 🏗️ Project Structure

```

├── public/           
│   └── image/          # Stores images accessible as static assets
├── src/                # Main source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application screens
│   ├── helper-function/ # Reusable utility/helper functions
│   ├── database/           # Static or textual data used in the project
│   ├── features/           # code for global state management using redux toolkit
│       └── cart/          # State management for handling cart
│       └── checkout/          # State management for handling checkout
│       └── home/          # State management for handling add to cart and menu display 
│   ├── AllFiles.jsx    # Centralized imports and exports for easy access to all components and pages from a single file
└── README.md           # Project documentation

```


## 📦 Dependencies

- mui/material: for reusable material ui component
- emotion/styled: for styling material ui component
- tailwind css: for styling html elements
- react-slick: for creating slideable image gallery/carousel
- slick-carousel: for styling the react-slick slideable image gallery/carousel
- react-router-dom: for navigating 
- axios: for handling http requests
- firebase: baas used for authentication in this project
- reduxjs/toolkit: for handling global state management
- ui/icons-material: for icons

