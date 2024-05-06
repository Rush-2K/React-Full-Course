import ReactDOM from "react-dom/client";
//ReactDOM belongs to react library
//It renders the App component
//Responsible in outputting the app components content to the screen

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
//render the app component and inject it into the root 

//index.jsx file act as main entrypoint for react app, since it is the first file to be loaded by html file
//this is where react app is "boot up"
//
