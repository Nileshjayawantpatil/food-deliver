import bcrypt from "bcryptjs";
import genToken from "../utils/token.js";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    const user = await User.findone({ email });
    if (user) {
      return res.status(400).json({ message: "User Already exist ." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters ." });
    }
    if (mobile.length < 10) {
      return res.status.json({
        message: "MObile number must be at least 10 digits . ",
      });
    }

    const hashpasswword = await bcrypt.hash(password, 10);

    user = await User.create({
      fullName,
      email,
      password: hashpasswword,
      mobile,
      role,
    });

    const token = await genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(`Sign up error ${error}`);
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user.findone({ email });
    if (!user) {
      return res.status(400).json({ message: "User Does not  exist ." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incoorect password" });
    }

    const hashpasswword = await bcrypt.hash(password, 10);

    user = await User.create({
      fullName,
      email,
      password: hashpasswword,
      mobile,
      role,
    });

    const token = await genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(`Sign In error ${error}`);
  }
};
export const signOut = async (req, res) => {
  try {
    res.clearcookie("token");
    return res.status(200).json({ message: "Sigout sucessful" });
  } catch (error) {
    res.status(500).json(`sign out error ${error}`);
  }
};
