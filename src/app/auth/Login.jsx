import React from "react";
import { Link } from "react-router-dom";
import PasswordInputField from "../../components/passwordInputField/PasswordInputField";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-145px)] md:h-[calc(100vh-20pxs)] mt-20">
      <div
        className="w-full h-full max-w-[700px] rounded-md p-5 md:p-14"
        style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <h1 className="text-center text-[32px] font-semibold">Login</h1>

        <form className="mt-10 w-full">
          <div className="mt-5">
            <label htmlFor="email" className="inputLabel">
              Email<span className="text-primary"> *</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="inputField py-3"
              />
            </label>
          </div>

          <div className="mt-7">
            <label htmlFor="email" className="inputLabel">
              Password<span className="text-primary"> *</span>
              <PasswordInputField
                className="inputField py-3"
                iconSize={18}
                placeholder="Enter your password"
              />
            </label>
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
              <button
                className="primaryButton w-[348px]"
                type="submit"
              ></button>
            </div>

            <div className="flex justify-center mt-8">
              <p className="text-center small-text text-neutral-700">
                Don't have an account?{" "}
                <Link to="/register" className="text-neutral-900">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
