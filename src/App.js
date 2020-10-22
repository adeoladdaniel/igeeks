import React, { Suspense, lazy } from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home"));


// let feeds = new News();

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Suspense fallback={<div>Loading....</div>}>
              <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/detail" exact component={Details} /> */}
              </Switch>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
