import { Touch, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { handleTouch } from "./assets/utils";

function App() {
  // const [count, setCount] = useState(0);
  const [touches, setTouches] = useState<Touch[]>([]);
  const [ratio, setRatio] = useState(-1);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test touches</h1>
      <div
        className="card"
        style={{ border: "solid 4px royalBlue" }}
        // ref={elementRef}
        onTouchStart={(e) => {
          console.log("sss");
          const newTouches = Array.from(e.changedTouches);
          setTouches([...newTouches]);
          const newRatio = handleTouch(newTouches);
          setRatio(newRatio);
        }}
      >
        <h2>
          {touches.length}, ratio: {ratio}
        </h2>
        <ul style={{ listStyle: "none", padding: "0px" }}>
          {touches.map((c, i) => (
            <li key={i} style={{ borderBottom: "solid 2px royalBlue" }}>
              <div>
                <h4>Client:</h4>
                <p>x: {c.clientX.toFixed(2)}</p>
                <p>y: {c.clientY.toFixed(2)}</p>
              </div>

              <div>
                <h4>Page:</h4>
                <p>x: {c.pageX.toFixed(2)}</p>
                <p>y: {c.pageY.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
