import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name Is Required!"],
    minLength: [3, "Name Must Contain At Least 3 Characters."],
    maxLength: [30, "Name Cannot Exceed 30 Characters."],
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
    validate: [validator.isEmail, "Please Provide A Valid Email."],
  },
  phone: {
    type: String,
    required: [true, "Phone Number Is Required"],
    minLength: [10, "Phone Number Must Contain At Least 10 Digits."],
    maxLength: [10, "Phone Number Cannot Exceed 10 Digits."],
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
    minLength: [8, "Password must be at least 8 characters"],
    maxLength: [32, "Password Cannot Exceed 32 Characters."],
    select: false,
  },
  address: {
    type: String,
    required: [true, "Address Is Required"],
    minLength: [3, "Address Must Contain At Least 3 Characters."],
    maxLength: [100, "Address Cannot Exceed 100 Characters."],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
