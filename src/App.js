import "./App.css";
import Header from "./components/Header/Header";
import bgImg1 from "./images/bg-tablet-pattern.svg";

function App() {
  return (
    <div className="App">
      <img src={bgImg1} className="Img" />
      <Header />
    </div>
  );
}

export default App;
