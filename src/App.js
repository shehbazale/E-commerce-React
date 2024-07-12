import "./App.css";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/navbar";
import Router from "./config/router";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Router />
      <Footer />
    </>
  );
}

export default App;
