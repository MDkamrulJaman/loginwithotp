import userdb from "../models/userSchema.js";

const userRegisterController = async (req, res) => {
  console.log(req.body);
  const { fname, email, password } = req.body;

  if (!fname || !email || !password) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const preuser = await userdb.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This Email is Already Exist" });
    } else {
      const finalUser = new userdb({
        fname,
        email,
        password,
      });

      // here password hasing

      const storeData = await finalUser.save();

      console.log(storeData);
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
};
export { userRegisterController };
