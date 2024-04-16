
import Productsapi from "./components/productsapi";
import Travel from "./components/Travel"
import Accessories from "./components/Accesories"
import Gifting from "./components/Gifting"
import Jewelry from "./components/Jewelery";

import { Switch, Route } from "react-router-dom"


import './App.css';

function App() {
  return (


    <Switch>
      <Route exact path="/tanntrimapp/bags" component={Productsapi} />
      <Route exact path="/tanntrimapp/travel" component={Travel} />
      <Route exact path="/tanntrimapp/accessories" component={Accessories} />
      <Route exact path="/tanntrimapp/gifting" component={Gifting} />
      <Route exact path="/tanntrimapp/jewelry" component={Jewelry} />
    </Switch>

  );
}

export default App;
