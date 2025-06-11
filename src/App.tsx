import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* I commented Button component which was implanted as an instant
          <Button>کلیک</Button> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
