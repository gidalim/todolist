import React from "react";
import "./style/reset.css";
import "./style/App.css";
import LayOut from "./components/LayOut";
import Main from "./components/Main";



function App() {
  return (
    <LayOut>
      <Main />
    </LayOut>
  )
}

export default App;
