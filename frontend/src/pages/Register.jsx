import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField, PasswordField, RadioField, TextAreaField } from "../components/subComponents/FormComponents";
import { Link } from "react-router-dom";

const App = () => {
  const registerDTO = Yup.object({
    fullName: Yup.string()
      .matches(/(^\s$)/, "Full name is required.")
      .min(2, "Name must contain at least 2 characters.")
      .max(50)
      .required("Full name is required."),
    email: Yup.string().email("Invalid email address").required("Email is required."),
    password: Yup.string().min(6, "Password must be at least 6 characters.").max(25).required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required."),
    gender: Yup.string()
      .matches(/^(male|female|others)$/, "Invalid gender")
      .required("Gender is required."),
    phone: Yup.string().optional(),
    address: Yup.string().optional(),
    profile: Yup.mixed().optional(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerDTO),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const submitRegistration = (data) => {
    console.log("Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-2 py-6 overflow-hidden">
      <form onSubmit={handleSubmit(submitRegistration)} className="w-full max-w-lg bg-light-gray shadow-md shadow-[#1e1e1e] h-fit rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">Create an Account</h1>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <InputField label="Full Name" name="fullName" control={control} placeholder={"Enter full name"} errorMsg={errors?.fullName?.message} />
            <InputField label="Email" name="email" type="email" control={control} placeholder={"Enter email address"} errorMsg={errors?.email?.message} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <PasswordField label="Password" name="password" control={control} placeholder={"Enter password"} errorMsg={errors?.password?.message} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
            <PasswordField label="Confirm Password" name="confirmPassword" control={control} placeholder={"Enter confirm password"} errorMsg={errors?.confirmPassword?.message} showPassword={showConfirmPassword} togglePasswordVisibility={toggleConfirmPasswordVisibility} />
          </div>

          <RadioField
            label="Gender"
            name="gender"
            control={control}
            errorMsg={errors?.gender?.message}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "others", label: "Others" },
            ]}
          />
          <InputField label="Phone" name="phone" type="tel" placeholder={"Enter phone number"} control={control} errorMsg={errors?.phone?.message} />
          <TextAreaField label="Address" name="address" placeholder={"Enter address"} control={control} errorMsg={errors?.address?.message} />
          {/* <FileField label="Profile" name="profile" control={control} errorMsg={errors?.profile?.message} /> */}
        </div>

        <button type="submit" className="mt-6 w-full py-3 bg-dark text-light rounded-md font-semibold hover:bg-orange-600 transition-all">
          Register
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default App;
