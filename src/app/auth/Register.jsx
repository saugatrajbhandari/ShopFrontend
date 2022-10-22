import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInputField from "../../components/passwordInputField/PasswordInputField";
import registerApi from "../../services/auth/registerApi";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email should be valid.")
      .trim()
      .required("email is required."),
    firstName: yup.string().trim().required("first name is required."),
    lastName: yup.string().trim().required("last name is required."),
    password: yup
      .string()
      .required("password is required")
      .min(8, "minimum character of a password should be at least 8")
      .max(20, "maximum character of a password should be upto 32"),
    repeatPassword: yup
      .string()
      .required("repeat password is required")
      .oneOf([yup.ref("password"), null], "password must be matched"),
  })
  .required();

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerHandler = async (data) => {
    const { email, firstName, lastName, password, repeatPassword } = data;
    if (isSubmitted) return;

    setIsSubmitted(true);
    try {
      await registerApi({
        email,
        firstName,
        lastName,
        password,
        repeatPassword,
      });
      toast.success("User successfully created.");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.email[0] || "Something went wrong");
    }
    setIsSubmitted(false);
  };

  return (
    <div
      className="mx-auto mt-20 w-full max-w-[700px] rounded-md p-5 md:p-14"
      style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <h1 className="text-center text-[32px] font-semibold">Register</h1>

      <form className="mt-10 w-full" onSubmit={handleSubmit(registerHandler)}>
        <div className="mt-5 md:grid md:grid-cols-2 md:gap-3">
          <div>
            <label className="inputLabel">
              FirstName<span className="text-primary"> *</span>
              <input
                type="text"
                placeholder="Enter your first name"
                className="inputField py-3"
                {...register("firstName")}
              />
            </label>
            <p className="text-red mt-2">{errors.firstName?.message}</p>
          </div>

          <div className="mt-7 md:mt-0">
            <label className="inputLabel">
              LastName<span className="text-primary"> *</span>
              <input
                type="text"
                placeholder="Enter your last name"
                className="inputField py-3"
                {...register("lastName")}
              />
            </label>
            <p className="text-red mt-2">{errors.lastName?.message}</p>
          </div>
        </div>

        <div className="mt-7">
          <label className="inputLabel">
            Email<span className="text-primary"> *</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="inputField py-3"
              {...register("email")}
            />
          </label>
          <p className="text-red mt-2">{errors.email?.message}</p>
        </div>

        <div className="mt-7">
          <label className="inputLabel">
            Password<span className="text-primary"> *</span>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInputField
                  {...field}
                  className="inputField py-3"
                  iconSize={18}
                  placeholder="Enter your password"
                />
              )}
            />
          </label>
          <p className="text-red mt-2">{errors.password?.message}</p>
        </div>

        <div className="mt-7">
          <label className="inputLabel">
            Repeat Password<span className="text-primary"> *</span>
            <Controller
              name="repeatPassword"
              control={control}
              render={({ field }) => (
                <PasswordInputField
                  {...field}
                  className="inputField py-3"
                  iconSize={18}
                  placeholder="Retype your password"
                />
              )}
            />
          </label>
          <p className="text-red mt-2">{errors.repeatPassword?.message}</p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center">
            <button className="primaryButton w-[348px]" type="submit">
              {isSubmitted ? "Registering..." : "Register"}
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
