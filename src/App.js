import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Directory from "./components/directory/directory.component";

// for test
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//     <Link to="/">Home</Link>
//   </div>
// );
// const TopicDetail = (props) => (
//   <div>
//     <h1>HATS PAGE: {props.match.params.topicID}</h1>
//     <button onClick={() => props.history.push("/hats")}>Hats</button>
//   </div>
// );

function App() {
  // fot test
  // return (
  //   <div>
  //     <Route exact path="/" component={HomePage}></Route>
  //     <Route exact path="/hats" component={HatsPage}></Route>
  //     <Route path="/hats/:topicID" component={TopicDetail}></Route>
  //   </div>
  // );

  return (
    <div>
      <HomePage>
        <Directory></Directory>
      </HomePage>
    </div>
  );
}

export default App;
