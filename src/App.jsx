import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer/footer";
import Header from "./layout/Header/header";
import Admin from "./pages/Admin/admin";
import About from "./pages/About/about";
import Shop from "./pages/Shop/shop";
import Product from "./ui/Product/product";
import Main from "./pages/Main/main";

function App() {
  let route = [
    {
      id: 1,
      path: "/",
      element: <Main/>
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 2,
      path: "/about",
      element: <About />,
    },
    {
      id: 3,
      path: "/shop",
      element: <Shop />,
    },
   
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
