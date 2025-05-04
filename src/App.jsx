import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer/footer";
import Header from "./layout/Header/header";
import Admin from "./pages/Admin/admin";

function App() {
  let route = [
    {
      id: 1,
      path: "/",
      element: "",
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
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
