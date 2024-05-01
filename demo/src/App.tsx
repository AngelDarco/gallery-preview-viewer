import "./App.css";
import Viewer from "darco-viewer";
import img1 from "./assets/girl1.jpg";
import img2 from "./assets/girl2.png";
import img3 from "./assets/girl3.jpg";
import img4 from "./assets/girl4.jpg";
import img5 from "./assets/girl5.jpg";
import { useState } from "react";

function App() {
  const [controls, setControls] = useState(true);

  return (
    <>
      <h1>My Gallery</h1>
      <h3>Darco Viewer</h3>{" "}
      <button onClick={() => setControls(!controls)}>
        Controls: {!controls ? "Hide" : "Show"}
      </button>
      <div className="App">
        <Viewer className="viewer" controls={controls}>
          <div>
            <img src={img1} alt="Image of a school girl, generated by AI" />
          </div>
          <div>
            <img src={img2} alt="image 02" />
          </div>
          <div>
            <img src={img3} alt="image 03" />
          </div>
          <div>
            <img src={img4} alt="image 03" />
          </div>
          <div>
            <img src={img5} alt="image 03" />
          </div>
        </Viewer>
      </div>
    </>
  );
}

export default App;
