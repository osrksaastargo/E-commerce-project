const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

const allUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ userName, email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "furniture", {
      expiresIn: "5hr",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email: email } });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ status: 401, message: "Invalid user" });
    }

    const token = jwt.sign({ _id: user.id }, "furniture", {
      expiresIn: "1d",
    });

    user.verifyToken = token;
    await user.save();

    const mailOptions = {
      from: "",
      to: email,
      subject: "Sending Email For password Reset",
      text: `This Link Valid For 2 MINUTES http://localhost:3000/forgot-password/${user.id}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        return res.status(401).json({ status: 401, message: "Email not sent" });
      } else {
        console.log("Email sent", info.response);
        return res
          .status(201)
          .json({ status: 201, message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
};
const reset = async (req, res) => {
  const { id, token } = req.params;

  try {
    // Verify token signature
    const verifyToken = jwt.verify(token, "furniture");

    // Check if token is valid
    if (verifyToken && verifyToken._id) {
      // Token is valid, proceed to find the user
      const validUser = await User.findOne({
        where: { id: id, verifyToken: token },
      });

      // Check if user exists
      if (validUser) {
        res.status(201).json({ status: 201, validUser });
      } else {
        res.status(401).json({ status: 401, message: "User does not exist" });
      }
    } else {
      // Invalid token
      res.status(401).json({ status: 401, message: "Invalid token" });
    }
  } catch (error) {
    // Handle invalid signature error
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ status: 401, message: "Invalid token signature" });
    } else {
      // Other errors
      res.status(500).json({ status: 500, error: error.message });
    }
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({ where: { id, verifyToken: token } });
    if (user) {
      const verifyToken = jwt.verify(token, "furniture");
      if (verifyToken._id == id) {
        // Ensure the user ID from token matches the request
        const newpassword = await bcrypt.hash(password, 10);
        await User.update({ password: newpassword }, { where: { id } });

        res
          .status(201)
          .json({ status: 201, message: "Password updated successfully" });
      } else {
        res.status(401).json({ status: 401, message: "Unauthorized access" });
      }
    } else {
      res
        .status(401)
        .json({ status: 401, message: "User not found or invalid token" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  allUser,
  reset,
  resetPassword,
};
