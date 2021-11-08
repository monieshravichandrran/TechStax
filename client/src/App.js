import React from "react"
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
      <Home/>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;