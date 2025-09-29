import react from "react";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const Primarycolor = "#ff4d2d";
  const hovercolor = "#e64323";
  const bgcolor = "#fff9f6";
  const bordercolor = "#ddd";

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgcolor }}
    >
      <div
        className={`bg-white rounded-x1 shadow-lg w-full max-w-md p-8 border-[1px] `}
        style={{ border: `1px solid ${bordercolor}` }}
      >
        <h1
          className={`text-3x1 font-bold mb-2  `}
          style={{ color: Primarycolor }}
        >
          Vingo
        </h1>
        <p className="text-gray-600 mb-8">
          Create your account to get started with delicous food deliveries
        </p>
        {/*Full Name*/}
        <diV className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium md-1"
          >
            FullName
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3  py-2  focus:outline-none focus:border-orange-500"
            placeholder="Enter your fullName"
            style={{ border: `1px solid ${bordercolor}` }}
          />
        </diV>
        {/*Email*/}
        <diV className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium md-1"
          >
            email{" "}
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-3  py-2  focus:outline-none focus:border-orange-500"
            placeholder="Enter your email"
            style={{ border: `1px solid ${bordercolor}` }}
          />
        </diV>
        {/*Mobile*/}
        <diV className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium md-1"
          >
            Mobile{""}
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-3  py-2  focus:outline-none focus:border-orange-500"
            placeholder="Enter your Mobile  Number"
            style={{ border: `1px solid ${bordercolor}` }}
          />
        </diV>

        {/*Mobile*/}
        <diV className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium md-1"
          >
            Password{""}
          </label>
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              className="w-full border rounded-lg px-3  py-2  focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
              style={{ border: `1px solid ${bordercolor}` }}
            />

            <button
              className="absolute right-3  cursor-pointer top-[14px] text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </diV>

        {/*Mobile*/}
        <diV className="mb-4">
          <label
            htmlFor="Role"
            className="block text-gray-700 font-medium md-1"
          >
            Role{""}
          </label>
          <div className="flex gap-2">
            {["user", "owner", "deliverboy"].map((r) => (
              <button
                className="flex-1 border rounded -lg px-3 py-2  text-center  font-medium transition-colors"
                onClick={() => setRole(r)}
                style={
                  role == r
                    ? { backgroundColor: Primarycolor, color: "White" }
                    : {
                        border: `1px solid ${Primarycolor}`,
                        color: "#333",
                      }
                }
              >
                {r}
              </button>
            ))}
          </div>
        </diV>

        <button
          className={`w-full font -semibold py-2 rounded -lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
       
        >
          Sign Up
        </button>
        <button className="w-full font">  <FcGoogle size={20}/>
        <span>sing up with Google</span></button>
      
      </div>
    </div>
  );
}

export default Signup;





