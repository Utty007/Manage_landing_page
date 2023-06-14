import "./App.css";
import Header from "./components/Header/Header";
import Firstframe from "./components/Main/Firstframe/Firstframe";
import Secondframe from "./components/Main/Secondframe/Secondframe";
import Thirdframe from "./components/Main/Thirdframe/Thirdframe";
import bgImg1 from "./images/bg-tablet-pattern.svg";

function App() {
  return (
    <div className="App">
      <img src={bgImg1} className="Img" />
      <Header />
      <Firstframe />
      <Secondframe />
      <Thirdframe />
    </div>
  );
}

export default App;
