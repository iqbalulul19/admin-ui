import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormSignUp = ({ onSuccess, onNavigateLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
      setError("Name, Email Address, dan Password wajib diisi.");
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    if (typeof onSuccess === "function") {
      onSuccess(payload);
    } else {
      console.log("SignUp data:", payload);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Continue with Google clicked");
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <LabeledInput
          label="Name"
          name="name"
          type="text"
          placeholder="Iqbal Ulul"
          value={formData.name}
          onChange={handleChange}
        />

        <LabeledInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="hello@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <LabeledInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••••••••"
          value={formData.password}
          onChange={handleChange}
        />

        <p className="text-xs text-gray-500 leading-relaxed">
          By continuing, you to agree to our{" "}
          <a href="#terms" className="text-[#299D91] hover:underline">
            terms of service.
          </a>
        </p>

        <Button
          type="submit"
          className="w-full py-2.5 rounded-md bg-[#299D91] hover:bg-[#22857a] text-white font-medium transition"
        >
          Sign Up
        </Button>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">or sign up with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mb-8">
          <Button
            type="button"
            variant="secondary"
            onClick={handleGoogleSignUp}
          >
            <span className="flex items-center justify-center">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="800"
                viewBox="-0.5 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                  fill="#FBBC05"
                />
                <path
                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                  fill="#EB4335"
                />
                <path
                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                  fill="#34A853"
                />
                <path
                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                  fill="#4285F4"
                />
              </svg>
              Continue with Google
            </span>
          </Button>
        </div>

        <p className="text-center text-xs text-gray-500 pt-3">
          Already have an account?{" "}
          {typeof onNavigateLogin === "function" ? (
            <button
              type="button"
              onClick={onNavigateLogin}
              className="font-semibold text-[#299D91] hover:underline cursor-pointer"
            >
              Sign In Here
            </button>
          ) : (
            <Link
              to="/login"
              className="font-semibold text-[#299D91] hover:underline"
            >
              Sign In Here
            </Link>
          )}
        </p>
      </form>
    </div>
  );
};

export default FormSignUp;