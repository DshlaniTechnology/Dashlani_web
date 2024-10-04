import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import HeroHome from './Component/HeroHome';
import Services from './Component/Services';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Producttwo from './Component/Producttwo';
import Product3 from './Component/Product3';
import CustomCursor from './Component/Cursor';
import Slider from './Component/Slider';


function App() {
  return (
  <>
    <Header />
    <CustomCursor />
    <HeroHome />
    {/* <Slider></Slider> */}
    <Services />
    <Product />
    <About />
    {/* <Producttwo /> */}
    {/* <Product3 /> */}
    <Contact />
    {/* <ContactWithProduct /> */}
    <Footer />
  </>
  );
}

export default App;
