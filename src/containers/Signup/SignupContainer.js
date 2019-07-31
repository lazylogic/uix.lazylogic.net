import React from 'react';
import { inject, observer } from 'mobx-react';
import { getErrorData } from 'utils';

// import components
import SignupTemplate from './SignupTemplate';

function SignupContainer(props) {
  // read props
  const { Template, onSignup } = props;

  // init state
  const [user, setUser] = React.useState({
    first_name: 'a',
    last_name: 'b',
    email: 'a@b.c',
    passwd: '12345678',
    allowed: false,
  });

  const [errors, setError] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    passwd: '',
  });

  const handleChange = (name) => (e, checked) => {
    setUser({
      ...user,
      [name]: checked === undefined ? e.target.value : checked,
    });
    setError({
      ...errors,
      [name]: '',
    });
  };

  const handleSignup = () => {
    onSignup(user)
      .then((response) => {
        console.log(response);
        // TODO: 회원 가입 성공 처리. 팝업 등
      })
      .catch((error) => {
        console.log(error, error.response);
        const data = getErrorData(error);
        setError({
          first_name: data.first_name ? data.first_name[0] : '',
          last_name: data.last_name ? data.last_name[0] : '',
          email: data.email ? data.email[0] : '',
          passwd: data.passwd ? data.passwd[0] : '',
        });
      });
  };

  return (
    <Template
      values={user}
      errors={errors}
      handleChange={handleChange}
      handelSubmit={handleSignup}
    />
  );
}

SignupContainer.defaultProps = {
  Template: SignupTemplate,
};

export default inject(({ userStore }) => ({
  onSignup: userStore.create,
}))(observer(SignupContainer));
