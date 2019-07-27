import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

// import components
import { Main, Login, Signup } from 'pages';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.loadUser();
    this.props.history.listen((location, action) => {
      console.log('on route change');
      this.props.loadUser();
    });
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Switch>
          <Route exact path="/signup/:sns" component={Signup} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        {process.env.NODE_ENV === 'local' && <DevTools />}
      </React.Fragment>
    );
  }
}

export default inject(({ userStore }) => ({
  loadUser: userStore.loadUser
}))(withRouter(App));
