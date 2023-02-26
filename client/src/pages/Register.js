import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { registerFunction } from "../services/apiFunction";

const Register = () => {
  const [show, setShow] = useState(true);

  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: "",
  });
  console.log(inputdata);
  const Navigate = useNavigate();
  // getting setInputdata value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  //submit form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === "") {
      window.alert("please enter you name");
    } else if (email === "") {
      window.alert("please enter your email ");
    } else if (!email.includes("@")) {
      window.alert("please enter a valid email");
    } else if (password === "") {
      window.alert(" please enter a valid password");
    } else if (password.length < 6) {
      window.alert(" please enter a strong password");
    } else {
      const response = await registerFunction(inputdata);

      console.log(response);
      if (response.status === 201) {
        window.alert("user successfully registered");

        setInputdata({ ...inputdata, fname: "", email: "", password: "" });
        Navigate("/");
      } else {
        window.alert("User doesn't registered successfully ");
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome to the register form</h1>
            <p>We are so glad that you are registering. </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname"> fname</label>
              <input
                type="fname"
                name="fname"
                id="fname"
                onChange={handleChange}
                placeholder="Enter your fname "
              />
            </div>

            <div className="form_input">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password"> Password</label>
              <div className="two">
                <input
                  type={show ? "password" : "text"}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <div
                  className="showpass"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleSubmit} type="submit">
              Sign Up
            </button>
            <p>
              have an account? <NavLink to="/">Login</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
