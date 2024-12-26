import React, { useState, useEffect } from "react";
// import UseEffect from "./component/Hooke/UseEffect";
// import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import Restaurant from "./component/Basic/Restaurant";
// import UseState from "./component/Hooke/useState";
// import UseReducer from "./component/Hooke/UseReducer";
// import Todo from "./component/ToDo/todo";
// import Maps from "./component/Map-location/Maps";
// // import import Maps2 from "./component/Map-location/Maps2";
// import Maps2 from "./component/Map-location/Maps2";
// import TestUtil from "./component/TestUtility/TestUtil";
// import Weather from "./component/WeatherApp/weather";
// import Calculator from "./component/Calculator/Calculator";
// import { useAuth0 } from "@auth0/auth0-react";
// import UserRef_1 from "./component/Hooke/UseRef/UserRef_1";

import UseRef_2 from "./component/Hooke/UseRef/UseRef_2";
const App = () => {
  // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // console.log(user);
  // const [user, setUser] = useState(null);
  // const [profile, setProfile] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // useEffect(() => {
  //   if (user) {
  //     setLoading(true);
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         setProfile(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log("Profile fetch failed:", err);
  //         setLoading(false);
  //       });
  //   }
  // }, [user]);

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  //   setUser(null);
  // };

  return (
    <>
      <UseRef_2 />

      {/* 
      {isAuthenticated ? (
        <>
          <div className="container d-flex">
            <button
              className="btn btn-danger mt-3 w-40"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Please Log In</h3>
                <p className="card-text">
                  Access your account to explore exclusive content and features.
                </p>
                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={() => loginWithRedirect()}
                >
                  Login with Redirect
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {isAuthenticated && <Weather />}
    */}



      {/* <Calculator /> */}
      {/* { isAuthenticated && < Weather /> } */}
      {/* <TestUtil/> */}
      {/* <Maps2 /> */}
      {/* <Maps /> */}
      {/* <Todo /> */}
      {/* <UseEffect /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <h1 className="app-h1">Welcome to App</h1>
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
      )} */}
    </>
  );
};

export default App;
