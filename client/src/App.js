import React from "react"
import { Router, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { history } from "./history"
const App = () => {
  return (
    <>
      <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
      </Router>
    </>
  )
}

export default App;