import { Link } from "react-router";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">

      <div className="w-full max-w-md">

        
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* card */}
        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">

          
          <div className="text-center">

            <Link
              to="/"
              className="text-2xl font-bold"
            >
              Attend<span className="text-yellow-400">Ease</span>
            </Link>

            <h1 className="mt-7 text-3xl font-bold">
              Welcome back
            </h1>

            <p className="mt-2 text-gray-500">
              Sign in to continue to your account.
            </p>

          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">

            {/* Role */}
            <div>

              <label
                htmlFor="role"
                className="mb-2 block text-sm font-medium"
              >
                Role
              </label>

              <select
                id="role"
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="hod">HOD</option>
                <option value="admin">Admin</option>
              </select>

            </div>

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@ei.nits.ac.in"
                className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

            </div>

            {/* Password */}
            <div>

              <div className="mb-2 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-500 transition hover:text-yellow-500"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-black/15 px-4 py-3 pr-12 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 accent-yellow-400"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-5 py-3.5 font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-gray-500">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-black transition hover:text-yellow-500"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;