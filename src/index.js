import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from '@auth0/auth0-react';
// import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <GoogleOAuthProvider clientId="your-google-client-id">
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kg8o8wer66td47dp.us.auth0.com"
      clientId="YWeb5JCWUk5qvSeyqARpt4AODvwpS3wv"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
  // </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//  Client Secret : PFMYxAmVzfbHsvTSFVVS7boLCq4uAqB9uh550IZMcDPjgQolXc8OzPILPcJL3F_5