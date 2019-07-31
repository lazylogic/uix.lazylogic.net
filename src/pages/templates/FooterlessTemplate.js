import React from 'react';
import { Header, Footer } from 'containers';

export default function DefaultTempate(props) {
  return (
    <React.Fragment>
      <header>
        <Header title="abc" />
      </header>
      <main>{props.children}</main>
    </React.Fragment>
  );
}
