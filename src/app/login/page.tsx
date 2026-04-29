"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { axiosPost } from "../../../services/axiosRequest";
function Login() {
   const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async() => {
  setError("");
  setMessage("");

  if(!email || !password){
    setError("All fields are required")
  }

  try {
    const res = await axiosPost("/auth/login",{email, password})
   if (!res) {
      setError("Login failed");
      return;
    }
     localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));

    setMessage("Login successful! Redirecting...");

     router.push("/home");
  } catch (error:unknown) {
    if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Invalid email or password");
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Invalid email or password");
      }
  }

//   const storedUser = localStorage.getItem("users");
//   console.log("🚀 ~ handleLogin ~ storedUser:", storedUser)

//   if (!storedUser) {
//     setError("No account found. Please register first.");
//     return;
//   }

//   const user = JSON.parse(storedUser);
//   console.log("🚀 ~ handleLogin ~ user:", user)

//     if (!Array.isArray(user)) {
//     setError("Corrupted user data. Please register again.");
//     return;
//   }

 
//  const foundUser = user.find(
//   (u: User) => u.email === email && u.password === password
// );

//   if (foundUser) {
//     localStorage.setItem("isLoggedIn", "true");

//     setMessage("Login successful! Redirecting...");

  
//       router.push("/home");
  

//   } else {
//     setError("Invalid email or password");
//   }
};

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600 relative overflow-hidden">
      {/* Card */}
      <div className="bg-white/10 rounded-2xl w-[350px] text-white shadow-2xl border-white/20 p-6">
        {/* <h2 className="text-sm opacity-80">Your logo</h2> */}
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        {/* Email */}
        <div className="mb-4">
         {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {message && (
          <div className="text-center text-gray-500">No messages yet</div>
        )}

          <label className="text-sm">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@gmail.com"
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="text-sm">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your Password"
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        <p className="text-xs mb-4 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        <button   onClick={handleLogin} className="w-full bg-blue-900 hover:bg-blue-800 transition p-2 rounded font-semibold">
          Sign in
        </button>

        {/* <p className="text-center text-sm my-4 opacity-80">
          or continue with
        </p> */}

        {/* Social buttons */}
        {/* <div className="flex justify-between gap-3">
          <button className="flex-1 bg-white text-black p-2 rounded">
            G
          </button>
          <button className="flex-1 bg-white text-black p-2 rounded">
            GH
          </button>
          <button className="flex-1 bg-white text-black p-2 rounded">
            f
          </button>
        </div> */}

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="underline cursor-pointer">
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
