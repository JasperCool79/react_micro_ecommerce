import AppBar from './AppBar/AppBar';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
// import SignUp from './pages/SingUp/SignUp';
// import Login from './pages/Login/Login';
// import Faq from './pages/Faq/Faq';
// import About from './pages/About/AboutUs';
// import SendProof from './pages/SendProof/SendProof';
import SingleProductDetail from './SingleProduct/SingleProductDetail'
import Home from './pages/Home/Home';
import CategoryProductPage from '../Compoents/pages/CategoryProductPage/CategoryProductPage'
import Cart from '../Compoents/pages/Cart/Cart'

function App() {
  return (
    <>
        <header style={{paddingTop: '10px'}}>
          <AppBar />
          <NavBar/>
        </header>
        <main>
          <Cart />
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default App;
