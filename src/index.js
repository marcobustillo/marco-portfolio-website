import React from "react";
import ReactDOM from "react-dom";
import { Provider, NotificationsContainer } from "rendition";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";

const theme = {
  colors: {
    primary: {
      main: "#2f89fc",
      dark: "#40514e",
      semilight: "#30e3ca",
      light: "#f5f5f5",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider theme={theme}>
        <NotificationsContainer />
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
