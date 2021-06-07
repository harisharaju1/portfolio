import React, { Component } from "react";
import ReactGA from "react-ga";
import LandingPage from "./pages/LandingPage";
import { CustomThemeProvider } from "./themes/themeContext";
class App extends Component {
  render() {
    ReactGA.initialize("UA-145894494-1");
    ReactGA.pageview("/");
    return (
      <CustomThemeProvider>
        <LandingPage />
      </CustomThemeProvider>
    );
  }
}

export default App;
