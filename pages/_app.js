import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store.js";
import { Provider } from "react-redux";

class AppMain extends App {
  componentDidMount = () => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  render() {
    const { Component, reduxStore, pageProps } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(AppMain);
