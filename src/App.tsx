import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import HomePage from "./app/Home"
import MainNav from "./components/navbar/main-nav"

const App = () => {
  return (
    <Router >
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </Router>
  )
}

export default App
