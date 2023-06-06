const UserModel = require("../models/DatabaseSchema");

async function getUser(req, res) {
  const { userEmail } = req.params;
  try {
    const existUser = await UserModel.findOne({ userEmail });
    if (existUser) {
      const { password, confirmPassword, ...rest } = Object.assign(
        {},
        existUser.toJSON()
      );
      return res.status(201).send(rest);
    }
    return res.status(404).send("User not found");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = { getUser };
