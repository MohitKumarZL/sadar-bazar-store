import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./Pages/Store";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import MenPage from "./Pages/Men";
import WomenPage from "./Pages/Women";
import KidsPage from "./Pages/Kids";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter basename="/sadar-bazar-store">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Store} />
          <Route path="/mens" component={MenPage} />
          <Route path="/womens" component={WomenPage} />
          <Route path="/kids" component={KidsPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
