import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password);

    // reset the error
    setRegisterError("");
    setRegisterSuccess("");

    //password validation
    if (password.length < 6) {
      setRegisterError("Password should be least 6 Characters or longer");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case,lower case characters and number."
      );
      return;
    }
    else if (!accepted) {
      setRegisterError('Please Accept our Terms and Conditions')
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setRegisterSuccess("Your Email Register Successfully", result);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex gap-1 items-center">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        className="input input-bordered"
                        name="password"
                        required
                      />
                    </div>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute ml-48"
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="-ml-2.5">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="terms"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px cursor-pointer select-none font-light text-gray-700"
                      htmlFor="checkbox"
                    >
                      Accept our <a href="">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              {registerError && (
                <p className="text-red-600 text-sm font-semibold pb-4 text-center">
                  {registerError}
                </p>
              )}
              {registerSuccess && (
                <p className="text-green-600 text-sm font-semibold pb-4 text-center">
                  {registerSuccess}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
