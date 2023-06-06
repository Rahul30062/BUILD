const UserModel = require("../models/DatabaseSchema");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { userEmail, password } = req.body.loginDetails;
    const user = await UserModel.findOne({ userEmail });

    if (user) {
      if (user.password) {
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.userEmail,
          },
          "MYNAMEISSAWRAHULNIRMALSAWRAHULNIRMAL"
        );

        console.log("Login Successful");
        return res.status(200).send({
          msg: "Login Successful",
          userId: user._id,
          userEmail: user.userEmail,
          token,
        });
      } else {
        return res.status(400).send({ msg: "Invlaid Password" });
      }
    } else {
      return res.status(404).send({ msg: "User not found." });
    }
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

module.exports = { login };
