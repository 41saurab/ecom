import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField, PasswordField } from "../components/subComponents/FormComponents";

const Login = () => {
  const registerDTO = Yup.object({
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    password: Yup.string().min(6, "Password must be at least 6 characters.").max(25).required("Password is required."),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerDTO),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const submitRegistration = (data) => {
    console.log("Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-2 h-[80vh]">
      <form onSubmit={handleSubmit(submitRegistration)} className="w-full max-w-lg bg-gray-100 shadow-md shadow-[#1e1e1e] h-fit rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">Create an Account</h1>
        <div className="space-y-3">
          <InputField label="Email" name="email" type="email" control={control} placeholder={"Enter email address"} errorMsg={errors?.email?.message} />
          <PasswordField label="Password" name="password" control={control} placeholder={"Enter password"} errorMsg={errors?.password?.message} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
        </div>

        <button type="submit" className="mt-6 w-full py-3 bg-[#101820] text-[#F8F8FF] rounded-md font-semibold transition-all">
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don'y have an account?{" "}
          <Link to={"/register"} className="text-orange-500 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
