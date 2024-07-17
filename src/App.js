import "./App.css";
import NewHero from "./components/NewHero";
import HomePage from "./components/HomePage";
import AsideNavbar from "./components/AsideNavbar";

function App() {
  return (
    <div className="App">
      <AsideNavbar />
      <HomePage />
    </div>
  );
}

export default App;
