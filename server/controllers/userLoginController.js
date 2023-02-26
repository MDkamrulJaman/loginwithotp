import userotp from "../models/userOtp.js";
import userdb from "../models/userSchema.js";

const userLogin = async (req, res) => {
  console.log(req.body);
  const { email, otp } = req.body;

  if (!otp || !email) {
    res.status(400).json({ error: "Please Enter Your OTP and email" });
  }

  try {
    const otpverification = await userotp.findOne({ email: email });

    if (otpverification.otp === otp) {
      const preuser = await userdb.findOne({ email: email });

      // token generate
      const token = await preuser.generateAuthtoken();
      res.status(200).json({ message: "User Login Succesfully Done", userToken: token });
    } else {
      res.status(400).json({ error: "Invalid Otp" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

export { userLogin };
