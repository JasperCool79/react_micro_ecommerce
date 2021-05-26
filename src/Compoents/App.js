import AppBar from './AppBar/AppBar';
import NavBar from './NavBar/NavBar';
import BannerCarousel from './ProductCarousel/ProductCarousel';
import ProductCategory from './ProductCategory/ProductCategory';
import SelectionProductList from './SelectionProductList/SelectionProductList';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer'

function App() {
  return (
    <>
        <header style={{paddingTop: '10px'}}>
          <AppBar />
          <NavBar/>
        </header>
        <main>
          <BannerCarousel />
          <ProductCategory />
          <SelectionProductList name="Latest Product" url="get_latest_products"/>
          <SelectionProductList name="Best Selling Product" url="get_best_selling_products"/>
          <SelectionProductList name="Popular Product" url="get_popular_products"/>
          <Testimonial/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default App;
