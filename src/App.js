import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyWeather from "./components/MyWeather";

function App() {
  return (
    <>
      <MyNavbar/>
      <MyWeather />
      <MyFooter />
    </>
  );
}

export default App;

