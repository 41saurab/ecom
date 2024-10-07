import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  try {
    const { fullName, email, phone, password, address } = req.body;

    if (!fullName || !email || !phone || !password || !address) {
      return next(new ErrorHandler("All Fields Are Required.", 400));
    }
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("Email Already Registered.", 400));
    }
    user = await User.create({
      fullName,
      email,
      phone,
      password,
      address,
    });
    sendToken(user, 200, res, "User Registered Successfully.");
  } catch (error) {
    next(error);
  }
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Provide Email and Password to Login.", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password.", 400));
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password.", 400));
  }
  sendToken(user, 200, res, "User Logged In Successfully.");
});

export const fetchUsers = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});
