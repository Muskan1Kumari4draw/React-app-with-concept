import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// import Restaurant from "./component/Basic/Restaurant";

// import UseState from "./component/Hooke/useState";
// import UseEffect from "./component/Hooke/UseEffect";
// import FileUpload from "./component/File-upload/FileUpload";
import Restaurant from "./component/Basic/Restaurant";
// import Navbar from "./component/Basic/Navbar";
const App = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

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
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <>
      {/* <FileUpload /> */}
       {profile ? ( <Restaurant />  ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
      {/* <UseState className="Use" /> */}
      {/* <UseEffect className="Use" /> */}
    </>
  );
};

export default App;
