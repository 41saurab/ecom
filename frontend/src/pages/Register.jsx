import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField, PasswordField, RadioField, TextAreaField } from "../components/subComponents/FormComponents";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Context } from "../main";
import axios from "axios";

const App = () => {
  const registerDTO = Yup.object({
    fullName: Yup.string().min(3, "Name must contain at least 2 characters.").max(30).required("Full name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    password: Yup.string().min(8, "Password must be at least 8 characters.").max(32).required("Password is required."),
    gender: Yup.string()
      .matches(/^(male|female|others)$/, "Invalid gender")
      .required("Gender is required."),
    phone: Yup.string().optional(),
    address: Yup.string().optional(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerDTO),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const submitRegistration = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full p-2 py-6 overflow-hidden">
      <form onSubmit={handleSubmit(submitRegistration)} className="w-full max-w-lg bg-light-gray shadow-md shadow-[#1e1e1e] h-fit rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">Create an Account</h1>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <InputField label="Full Name" name="fullName" control={control} placeholder="Enter full name" errorMsg={errors?.fullName?.message} />
            <InputField label="Email" name="email" type="email" control={control} placeholder="Enter email address" errorMsg={errors?.email?.message} />
          </div>

          <PasswordField label="Password" name="password" control={control} placeholder="Enter password" errorMsg={errors?.password?.message} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />

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
          <InputField label="Phone" name="phone" type="tel" control={control} placeholder="Enter phone number" errorMsg={errors?.phone?.message} />
          <TextAreaField label="Address" name="address" placeholder="Enter address" control={control} errorMsg={errors?.address?.message} />
        </div>

        <button type="submit" className="mt-6 w-full py-3 bg-dark text-light rounded-md font-semibold hover:bg-orange-600 transition-all">
          Register
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default App;
