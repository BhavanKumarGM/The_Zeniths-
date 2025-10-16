import React from "react";
import { Toaster } from 'react-hot-toast';
import Routes from "./Routes";
import ThemeProvider from "./components/ThemeProvider";
import "./i18n";
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <Routes />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
            border: '1px solid var(--color-border)',
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
