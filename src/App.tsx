import { Touch, useState } from "react";
import "./App.css";
import { handleTouch } from "./assets/utils";

function App() {
  // const [count, setCount] = useState(0);
  const [touches, setTouches] = useState<Touch[]>([]);
  const [ratio, setRatio] = useState(-1);
  return (
    <div
      style={{ border: "solid 4px royalBlue" }}
      onTouchStart={(e) => {
        console.log("sss");
        const newTouches = Array.from(e.touches);
        setTouches([...newTouches]);
        const newRatio = handleTouch(newTouches);
        setRatio(newRatio);
      }}
    >
      <h1>Test touches</h1>
      <div
        className="card"

        // ref={elementRef}
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
    </div>
  );
}

export default App;
