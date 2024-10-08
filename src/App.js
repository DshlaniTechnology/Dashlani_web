import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import HeroHome from './Component/HeroHome';
import Services from './Component/Services';
import About from './Component/About';
import Contact from './Component/Contact';
import CustomCursor from './Component/Cursor';
import ProductLPhone from './Component/ProductPhone';
import ProductLaptop from './Component/ProductLaptop';
import ProductTab from './Component/ProductTab';
import { useEffect, useState } from 'react';
import Loader from './Component/Loder';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the loading time here (in milliseconds)
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <CustomCursor />
          <HeroHome />
          <Services />
          <ProductLPhone />
          <ProductLaptop />
          <ProductTab />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
