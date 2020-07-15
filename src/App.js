import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
// import Directory from "./components/directory/directory.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and sign-up/sign-in-and sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // setState of user info (id, displayName...) if userAuth is not null
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShop) => {
          this.setState(
            {
              currentUser: {
                id: snapShop.id,
                ...snapShop.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        // set currentUser to null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  // return (
  //   <div>
  //     <HomePage>
  //       <Directory></Directory>
  //     </HomePage>
  //   </div>
  // );
}

export default App;
