import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

//import { RouterProvider } from 'react-router';
//import router from './router';
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
    </ThemeProvider>
    //<RouterProvider router={router} />

  )
  
};

export default App;
