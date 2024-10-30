import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Restaurant from "./component/Basic/Restaurant";

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      setLoading(true);
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
        .then((res) => {
          setProfile(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Profile fetch failed:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <>
      <h1 className="app-h1">Welcome to App</h1>
      {profile ? (
        <>
          <Restaurant />
          <button onClick={logOut}>Log out</button>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <button className="btn-signin" onClick={() => login()}>
          Sign in with Google 🚀
        </button>
      )}
    </>
  );
};

export default App;
