import React from "react";
import { Link } from "react-router-dom";
import PasswordInputField from "../../components/passwordInputField/PasswordInputField";

const Register = () => {
  return (
    <div
      className="mx-auto mt-20 w-full max-w-[700px] rounded-md p-5 md:p-14"
      style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <h1 className="text-center text-[32px] font-semibold">Register</h1>

      <form className="mt-10 w-full">
        <div className="mt-5 md:grid md:grid-cols-2 md:gap-3">
          <div>
            <label className="inputLabel">
              FirstName<span className="text-primary"> *</span>
              <input
                type="text"
                placeholder="Enter your first name"
                className="inputField py-3"
              />
            </label>
          </div>

          <div className="mt-7 md:mt-0">
            <label className="inputLabel">
              LastName<span className="text-primary"> *</span>
              <input
                type="text"
                placeholder="Enter your last name"
                className="inputField py-3"
              />
            </label>
          </div>
        </div>

        <div className="mt-7 md:mt-0">
          <label className="inputLabel">
            Email<span className="text-primary"> *</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="inputField py-3"
            />
          </label>
        </div>

        <div className="mt-7">
          <label className="inputLabel">
            Password<span className="text-primary"> *</span>
            <PasswordInputField
              className="inputField py-3"
              iconSize={18}
              placeholder="Enter your password"
            />
          </label>
        </div>

        <div className="mt-7">
          <label className="inputLabel">
            Repeat Password<span className="text-primary"> *</span>
            <PasswordInputField
              className="inputField py-3"
              iconSize={18}
              placeholder="Retype your password"
            />
          </label>
        </div>

        <div className="mt-12">
          <div className="flex justify-center">
            <button className="primaryButton w-[348px]" type="submit">
              Register
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <p className="text-center small-text text-neutral-700">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
