import React, { useEffect } from "react";
import { connect } from "react-redux";
import CustomJson from "./components/CustomJson";
import Navigation from "./components/navBar";
import { storeCustomApi } from "./actions/custonAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './components/ShowAllProduct';
import OrderList from "./components/OrderList";
import ShowAddCart from "./components/ShowAddCart";
import BuyProduct from "./components/BuyProduct";
import OrderProduct from "./components/OrderProduct";
import SearchProduct from "./components/SearchProduct";
import ShowOneProduct from "./components/ShowOneProduct";
import Loader from "./components/Loader";
import { jsonData } from "./components/JsonData";

function App({ storeCustomApi }) {
  useEffect(() => {
    storeCustomApi(jsonData);
  }, [])
  return (
    <>
      <Router>
        {/* <CustomJson /> */}
        <div className="app-container">
          <Navigation />
          <div className="app-content">
            <Switch>
              <Route exact path="/" render={(props) => <Product {...props} />}></Route>
              <Route path="/moblie" render={(props) => <Product {...props} />}></Route>
              <Route path="/television" render={(props) => <Product {...props} />}></Route>
              <Route path="/laptop" render={(props) => <Product {...props} />}></Route>
              <Route path="/showproduct" render={(props) => <ShowOneProduct {...props} />}></Route>
              <Route path="/order-list" render={(props) => <OrderList {...props} />} />
              <Route path="/add-cart-list" render={(props) => <ShowAddCart {...props} />}></Route>
              <Route path="/buy" render={(props) => <BuyProduct {...props} />}></Route>
              <Route path="/order" render={(props) => <OrderProduct {...props} />}></Route>
              <Route path="/search" render={(props) => <SearchProduct {...props} />}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default connect(null, { storeCustomApi })(App);
