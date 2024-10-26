const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const { upload } = require("../multer");
const Error = require("../Middlewares/Error");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../Utils/sendMail");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const fileName = req.file.filename;
      const filePath = `uploads/${fileName}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        } else {
          res.json({ message: "file deleted successfully" });
        }
      });
      return res
        .status(400)
        .json({ success: false, message: "Email already Exists" });
      // return next(new Error("User already Exists", 400));
    }

    const fileName = req.file.filename;
    const fileUrl = path.join(fileName);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };
    const activationToken = createActivationToken(user);

    // const newUser = await User.create(user);
    // res.status(201).json({ success: true, newUser });

    const activationUrl = `http://localhost:5173/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        suject: "Activate your Account",
        message: `Hello ${user.name}please Click on the link to activate your account :${activationUrl}`,
      });

      res.status(200).json({
        success: true,
        message: `Please check your email:-${user.email} to activate your account`,
      });
      
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};
module.exports = router;