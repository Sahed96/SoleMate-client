import Aos from "aos";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("Account created Successfully ", {
                duration: 1500,
              });
              setTimeout(() => {
                navigate("/products");
              }, 1500);
            }
          });
        })
        .catch(() => {
          toast.error("Failed to create account");
        });
    });
  };

  return (
    <div data-aos="zoom-in-down">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register- SoleMate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full max-w-md p-8 mx-auto mt-4 lg:mt-7 space-y-3 bg-emerald-50 mb-10 rounded-xl dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register Here</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 border-2 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className=" text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 border-2 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className=" text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block dark:text-gray-600">
              Photo
            </label>
            <input
              type="text"
              name="photoURL"
              id="photo"
              placeholder="Photo"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 border-2 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("photoURL")}
            />
            {errors.photo && (
              <span className=" text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be 6 chars",
                },
                validate: (value) => {
                  return (
                    [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                      pattern.test(value)
                    ) || "password must have lowercase, uppercase & number"
                  );
                },
              })}
            />
            {errors.password && (
              <span className=" text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
            <span
              onClick={() => setShowPass(!showPass)}
              className=" absolute top-9 hover:cursor-pointer right-2"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="block mx-auto p-3 text-center font-semibold rounded-full dark:bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:font-bold">
            Register
          </button>
        </form>

        <p className="text-md text-center sm:px-6 dark:text-gray-600">
          Already have an account? Please
          <Link to="/login" className="underline font-bold text-rose-800 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
