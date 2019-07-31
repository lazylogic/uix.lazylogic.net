import React from 'react';
import { Header, Footer } from 'containers';

export default function DefaultTempate(props) {
  return (
    <React.Fragment>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
