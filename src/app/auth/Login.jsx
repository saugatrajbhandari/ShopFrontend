import React from "react";
import { Link } from "react-router-dom";
import PasswordInputField from "../../components/passwordInputField/PasswordInputField";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email should be valid")
      .trim()
      .required("email is required."),
    password: yup
      .string()
      .required("password is required.")
      .min(8, "minimum character of a password should be at least 8")
      .max(20, "maximum character of a password should be upto 20"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginHandler = async (data) => {
    console.log(data);
  };

  return (
    <div
      className="mx-auto mt-20 w-full max-w-[700px] rounded-md p-5 md:p-14"
      style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <h1 className="text-center text-[32px] font-semibold">Login</h1>

      <form className="mt-10 w-full" onSubmit={handleSubmit(loginHandler)}>
        <div className="mt-5">
          <label htmlFor="email" className="inputLabel">
            Email<span className="text-primary"> *</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="inputField py-3"
              {...register("email")}
            />
          </label>
          <p className="mt-2 text-red">{errors.email?.message}</p>
        </div>

        <div className="mt-7">
          <label htmlFor="email" className="inputLabel">
            Password<span className="text-primary"> *</span>
            <Controller
              render={({ field }) => (
                <PasswordInputField
                  {...field}
                  className="inputField py-3"
                  iconSize={18}
                  placeholder="Enter your password"
                />
              )}
              name="password"
              control={control}
            />
          </label>
          <p className="mt-2 text-red">{errors.password?.message}</p>
        </div>

        <div className="mt-8 flex justify-between">
          <div>
            <input type="checkbox" />
            <label
              htmlFor="remember-me"
              className="ml-3 font-regular cursor-pointer"
            >
              Remember me
            </label>
          </div>

          <Link to="/forgot-password" className="text-neutral-800">
            Forgot password?
          </Link>
        </div>

        <div className="mt-12">
          <div className="flex justify-center">
            <button className="primaryButton w-[348px]" type="submit">
              Login
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <p className="text-center small-text text-neutral-700">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
