import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import AllCategories from "./views/AllCategories";
import Cart from "./views/Cart";
import Page404 from "./views/Page404";
import Test from "./views/Test";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/allcategories">
            <AllCategories />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
