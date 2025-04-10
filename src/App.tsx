import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import HomePage from "./app/Home"
import MainNav from "./components/navbar/main-nav"
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;