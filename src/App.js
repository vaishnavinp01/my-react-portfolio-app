import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Components/ThemeContext";
import Loading from "./Components/Loading";
// import SwiperComponent from "./Components/SwiperComponent";

function App() {
  // Theme
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";
  }, [theme]);
  // Loading
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`app ${theme}-mode`}>
      {loading ? (
        <Loading />
      ) : (
      <MainLayout />
      )}
      {/* <SwiperComponent/> */}
    </div>
  );
}

export default App;
