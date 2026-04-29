"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { axiosPost } from "../../../services/axiosRequest";
import { json } from "stream/consumers";
export interface User {
    name:string,
    email:string,
    password:string
}
function Register() {
    const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

    console.log("🚀 ~ handleRegister ~ error:", error)
  const handleRegister = async() => {
    setError("");
    setSuccess("");

  
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axiosPost
      ("/auth/register", {
        name,
        email,
        password,
      })
  
      if(!res){
       setError("!Something wemt wrong")
        return; 
      }

      localStorage.setItem("token", res.token)
      localStorage.setItem("user", JSON.stringify(res.user))
      setSuccess("User Registered successfully")
      router.push("/home")
    } catch (error) {
      setError( "Registration failed")
      return error
    }
  }
// const existingUsers = localStorage.getItem("users");

//   let users = existingUsers ? JSON.parse(existingUsers) : [];

//   if (!Array.isArray(users)) {
//   users = [];
// }

 
//   const userExists = users.find((u:User ) => u.email === email);
//   console.log("🚀 ~ handleRegister ~ userExists:", userExists)

//   if (userExists) {
//     setError("User already exists with this email");
//     return;
//   }

  
//   const newUser = {
//     name,
//     email,
//     password,
//   };

  
//   users.push(newUser);


//   localStorage.setItem("users", JSON.stringify(users));

//   setSuccess("Registration successful! Redirecting...");

//   setTimeout(() => {
//     router.push("/home");
//   }, 1500);
// };
//     const existingUser = localStorage.getItem("user");

//     if (existingUser) {
//       const user = JSON.parse(existingUser);

//       if (user.email === email) {
//         setError("User already exists with this email");
//         return;
//       }
//     }

   
//     const newUser = {
//       name,
//       email,
//       password,
//     };

//     localStorage.setItem("user", JSON.stringify(newUser));

//     setSuccess("Registration successful! Redirecting...");

//     setTimeout(() => {
//       router.push("/home");
//     }, 1500);
//   };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600 relative overflow-hidden">
      {/* 
      {/* Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 w-[380px] text-white shadow-2xl">
       
       
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        {/* Name */}
        <div className="mb-4">
                     {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="text-center text-gray-500">No messages yet</div>
        )}
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
             onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm">Email</label>
          <input
            type="email"
             onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-mail"
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm">Password</label>
          <input
            type="password"
             onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
             onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full mt-1 p-2 rounded bg-white/80 text-black outline-none"
          />
        </div>

        {/* Button */}
        <button  onClick={handleRegister} className="w-full bg-blue-900 hover:bg-blue-800 transition p-2 rounded font-semibold">
          Sign up
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
          Already have an account?{" "}
          <Link href="/" className="underline cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
