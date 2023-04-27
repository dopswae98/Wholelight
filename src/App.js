//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Homepage from "./Pages/Homepage";
import "font-awesome/css/font-awesome.css";
// import "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ("@fortawesome/free-regular-svg-icons");
// import "@fortawesome/react-fontawesome@latest";

function App() {
  return (
    <div className="Apps">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Homepage />
    </div>
  );
}

export default App;
