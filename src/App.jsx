import "./App.css";
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleControllerOnClick(value) {
    setCount((prevCount) => prevCount + value);
  }

  return (
    <div className={"App"}>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}></Viewer>
      </section>
      <section>
        <Controller onClick={handleControllerOnClick}></Controller>
      </section>
    </div>
  );
}

export default App;
