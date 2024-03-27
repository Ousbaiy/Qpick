import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Cart } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
