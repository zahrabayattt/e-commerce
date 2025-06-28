import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Your main CSS file
import { ThemeProvider } from "./components/theme-provider"; // Adjust path as needed

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
