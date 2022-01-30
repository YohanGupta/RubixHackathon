import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import "./Home.css";
import Image from "../images/new.svg";
import axios from "axios";


const Home = () => {
<<<<<<< HEAD
    const {setLoggedin,userlogin} = useContext(GlobalContext);
    setLoggedin(true);
    console.log(userlogin);
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
=======
  const { setLoggedin, userDoc, setUserDoc } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .post("http://localhost:4001/items/p", {
        email: localStorage.getItem("user"),
      })
      .then((resp) => {
        setUserDoc(resp.data.foods.food);
      });
  }, [userDoc.length]);
  setLoggedin(true);

  return (
    <div className="home_container">
      <div className="left">
        <img className="svg" src={Image} alt="" />
        <p className="left_info">
          Total Items in your Fridge:{" "}
          <span className="count">{userDoc.length}</span>
        </p>
      </div>
    </div>
  );
};
>>>>>>> 1217a38c3ace5a58427ed6891bb91453fb996c9c

export default Home;
