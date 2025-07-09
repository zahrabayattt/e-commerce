import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { ThemeProvide } from './components/ThemeProvide.tsx';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvide>
        <App />
        <Toaster />
      </ThemeProvide>
    </QueryClientProvider>
  </StrictMode>
);
