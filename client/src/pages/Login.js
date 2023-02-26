import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sentOtpFunction } from "../services/apiFunction";
import "../styles/mix.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      window.alert("Enter Your Email !");
    } else if (!email.includes("@")) {
      window.alert("Enter Valid Email !");
    } else {
      const data = {
        email: email,
      };

      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        navigate("/user/otp", { state: email });
      } else {
        window.alert(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>WelCome back, Log In </h1>
            <p>Hi,We are glad you are back</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            <button className="btn" type="submit" onClick={sendOtp}>
              Loging
            </button>
            <p>
              dont have an account? <NavLink to="register">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
