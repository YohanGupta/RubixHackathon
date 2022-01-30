<<<<<<< HEAD
import React  from "react";
=======
import React from "react";
>>>>>>> 1217a38c3ace5a58427ed6891bb91453fb996c9c
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import "./Login.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import { useNavigate } from "react-router-dom";
const Login = () => {
<<<<<<< HEAD
    const { userlogin, setUserlogin, setLoggedin, loggedin } = useContext(GlobalContext);

    //const [visible , setVisible] = useState(true);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserlogin({ ...userlogin, [name]: value });
        console.log(userlogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4001/auth/signin", { credentials: userlogin })
            .then((resp) => {
                setLoggedin(true);
                console.log(resp.data);
                console.log("user data passed");
                window.location = "/home"+userlogin.email;
            })
            .catch((err) => {
                console.log(err);
                window.location = "/";
            });

        console.log(userlogin);
        // setUserlogin({ email: "", password: "" });
    };
=======
  const { userlogin, setUserlogin, setLoggedin, loggedin } =
    useContext(GlobalContext);
  const history = useNavigate();
  //const [visible , setVisible] = useState(true);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserlogin({ ...userlogin, [name]: value });
    console.log(userlogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/auth/signin", { credentials: userlogin })
      .then((resp) => {
        setLoggedin(true);
        console.log(resp.data);
        console.log("user data passed");
        localStorage.setItem("user", userlogin.email);
        history("/home");
      })
      .catch((err) => {
        console.log(err);
        history("/");
      });
    console.log(userlogin);
  };
>>>>>>> 1217a38c3ace5a58427ed6891bb91453fb996c9c

  return (
    <div className="form__container">
      <h1 className="form__title">Login</h1>
      <form>
        <div className="form__input">
          <MdEmail className="icon" />
          <input
            type="email"
            name="email"
            value={userlogin.email}
            onChange={handleChange}
            placeholder="Enter the email..."
            required
          />
        </div>

        <div className="form__input">
          <RiLockPasswordFill className="icon" />
          <input
            type="password"
            name="password"
            value={userlogin.password}
            onChange={handleChange}
            required
            placeholder="Enter the password..."
          />
        </div>
        <button className="btn" type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
