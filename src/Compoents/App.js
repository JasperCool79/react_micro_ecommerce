import React,{useReducer,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from "react-router-dom";
import AppBar from './AppBar/AppBar';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import SignUp from './pages/SingUp/SignUp';
import Login from './pages/Login/Login';
import Faq from './pages/Faq/Faq';
import About from './pages/About/AboutUs';
import Contact from './pages/ContactUs/ContactUs';
import SendProof from './pages/SendProof/SendProof';
import SingleProductDetail from './SingleProduct/SingleProductDetail'
import Home from './pages/Home/Home';
import CategoryProductPage from '../Compoents/pages/CategoryProductPage/CategoryProductPage'
import CategoryProduct from '../Compoents/pages/CategoryProductPage/CategoryProduct'
import Cart from '../Compoents/pages/Cart/Cart'
import CartContext from '../CartContex';
import Swa from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(Swa)

function reducer(state='', action) {
  switch (action.type) {
    case 'ADD':
      let { id, quantity, name, price, image } = action.payload;
      let data = { [id]: { "quantity": quantity, "id": id, "price": price, "name": name, "image": image } };
      Swal.fire(
        'Success!',
        'Product Add To Cart Successfully!',
        'success'
      );
      if (state !== '') {
        return JSON.stringify({ ...JSON.parse(state),...data })
      } else {
        return JSON.stringify(data);
      }
    case 'decrement':
      let decrease = action.payload;
      let ID = decrease.id;
      let Quantity = decrease.quantity;
      let dd = {...JSON.parse(state)};
      dd[ID]['quantity'] = Quantity;
      console.log(dd[ID]['quantity']);
      Swal.fire(
        'Success!',
        'Product Quantity Decrease Successfully!',
        'info'
      );
      return JSON.stringify(dd);
    case 'increase':
      let increase = action.payload;
      let Id = increase.id;
      let Qty = increase.quantity;
      let mydd = {...JSON.parse(state)};
      mydd[Id]['quantity'] = Qty;
      console.log(mydd[Id]['quantity']);
      Swal.fire(
        'Success!',
        'Product Quantity Increase Successfully!',
        'success'
      );
      return JSON.stringify(mydd);
    case 'delete':
      let myState = { ...JSON.parse(state) };
      delete myState[action.payload.id];
      Swal.fire(
        'Success!',
        'Product Deleted Successfully!',
        'error'
      );
      return JSON.stringify(myState);
    default:
      throw new Error();
  }
}

function App() {
  const [cart, setCart] = useReducer(reducer,'');
  return (
    <CartContext.Provider value={{cart,setCart}}>
      <Router>
        <header style={{paddingTop: '10px'}}>
          <AppBar />
          <NavBar/>
        </header>
        <main>
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/faq" exact><Faq/></Route>
            <Route path="/login" exact><Login/></Route>
            <Route path="/register" exact><SignUp/></Route>
            <Route path="/About" exact><About/></Route>
            <Route path="/send-proof" exact><SendProof/></Route>
            <Route path="/contact" exact><Contact/></Route>
            <Route path="/cart" exact><Cart/></Route>
            <Route path="/category/:id" component={CategoryProduct}/>
            <Route path="/product/:product_id" component={SingleProductDetail}/>
          </Switch>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
