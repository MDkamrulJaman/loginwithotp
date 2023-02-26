import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userVerify } from "../services/apiFunction";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      window.alert("Enter Your Otp");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      window.alert("Enter Valid Otp");
    } else if (otp.length < 6) {
      window.alert("Otp Length minimum 6 digit");
    } else {
      const data = {
        otp,
        email: location.state,
      };

      const response = await userVerify(data);

      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
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
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                name="otp"
                id=""
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter Your OTP"
              />
            </div>
            <button className="btn" onClick={LoginUser}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Otp;
