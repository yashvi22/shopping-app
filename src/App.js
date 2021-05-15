import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from './pages/shoppage/ShopPage.component'
import Header from "./components/Header/Header.Component";
const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
