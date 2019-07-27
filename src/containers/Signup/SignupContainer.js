import React from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

// import components
import SignupTemplate from './SignupTemplate';
import EmailField from 'components/atoms/EmailField';
import PasswdField from 'components/atoms/PasswdField';

@inject(({ userStore }) => ({
  user: userStore.user,
  setEmail: userStore.setEmail,
  setPasswd: userStore.setPasswd
}))
@autobind
export default class SignupContainer extends React.Component {
  handleEmail(e) {
    this.props.setEmail(e.target.value);
  }

  handlePasswd(e) {
    this.props.setPasswd(e.target.value);
  }

  render() {
    const { Template, user } = this.props;
    return (
      <Template
        email={<EmailField id="signup-email" value={user.email} onChange={this.handleEmail} />}
        passwd={<PasswdField id="signup-passwd" value={user.passwd} onChange={this.handlePasswd} />}
      />
    );
  }
}

SignupContainer.defaultProps = {
  Template: SignupTemplate
};
