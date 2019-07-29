import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';

// import components
import { Main, Login, Signup } from 'pages';
import { NotFound } from 'pages';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.auth();
    this.props.history.listen((location, action) => {
      this.props.auth();
    });
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default inject(({ userStore }) => ({
  auth: userStore.auth,
}))(withRouter(App));
