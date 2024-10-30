import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Restaurant from "./component/Basic/Restaurant";

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <>
      {profile ? (
        <>
          <Restaurant />
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )}
    </>
  );
};

export default App;
