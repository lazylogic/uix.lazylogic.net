import React from 'react';
import { Header, Footer } from 'containers';

export default function PageTemplate(props) {
  return (
    <React.Fragment>
      <Header title="abc" />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
