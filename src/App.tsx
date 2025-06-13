<<<<<<< feature/create-stepper
import { Button } from './components/ui/button';
=======
import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from './Layout';
// import { Button } from './components/ui/button';
>>>>>>> dev

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <div>صفحه اصلی</div>
        </Layout>
        <Routes>
          {/* I commented Button component which was implanted as an instant
          <Button>کلیک</Button> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
