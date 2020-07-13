import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Directory from "./components/directory/directory.component";

function App() {
  return (
    <div>
      <HomePage>
        <Directory></Directory>
      </HomePage>
    </div>
  );
}

export default App;
