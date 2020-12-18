import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/header";
import Slogan from "./component/slogan/slogan";
import Footer from "./component/footer/footer";
import Home from "./pages/home/home";
import Item from "./pages/item/item";
import Products from "./pages/products/products";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Slogan />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/item" component={Item} />
          <Route path="/products" component={Products} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
