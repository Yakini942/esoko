"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F9F3EF] to-white">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md mx-4">
        <h1 className="text-2xl font-bold text-[#1B3C53] mb-2">Create Your Account</h1>
        <p className="text-[#456882] mb-6">Join us and start shopping today.</p>
        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3 mb-4">
          <button className="w-full flex items-center justify-center gap-2 bg-[#fff] border border-[#D2C1B6] rounded-md py-2 font-medium text-[#1B3C53] hover:bg-[#F9F3EF] transition-colors">
            <span className="h-5 w-5 flex items-center justify-center"><FaGoogle size={20} /></span> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-[#fff] border border-[#D2C1B6] rounded-md py-2 font-medium text-[#1B3C53] hover:bg-[#F9F3EF] transition-colors">
            <span className="h-5 w-5 flex items-center justify-center"><FaFacebook size={20} /></span> Sign up with Facebook
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-[#1B3C53] font-bold mb-1">Full Name</label>
            <input type="text" className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-[#1B3C53] font-bold mb-1">Email Address</label>
            <input type="email" className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="relative">
            <label className="block text-[#1B3C53] font-bold mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Create a password" />
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-9 text-[#456882]">
              <span className="h-5 w-5 flex items-center justify-center">
                {showPassword ? (
                  <FaEyeSlash size={20} aria-label="Hide password" />
                ) : (
                  <FaEye size={20} aria-label="Show password" />
                )}
              </span>
            </button>
            {/* Password strength indicator can be added here */}
          </div>
          <div className="relative">
            <label className="block text-[#1B3C53] font-bold mb-1">Confirm Password</label>
            <input type={showConfirm ? "text" : "password"} className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Confirm your password" />
            <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-3 top-9 text-[#456882]">
              <span className="h-5 w-5 flex items-center justify-center">
                {showConfirm ? (
                  <FaEyeSlash size={20} aria-label="Hide password" />
                ) : (
                  <FaEye size={20} aria-label="Show password" />
                )}
              </span>
            </button>
          </div>
          <div>
            <label className="block text-[#1B3C53] font-bold mb-1">Phone Number (optional)</label>
            <input type="tel" className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="w-full bg-[#456882] hover:bg-[#1B3C53] text-white font-bold py-3 rounded-md transition-colors duration-300">Create Account</button>
        </form>
        <div className="text-center mt-4">
          <Link href="/login" className="text-[#456882] hover:underline">Already have an account? Sign in</Link>
        </div>
        <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
          <span className="mr-1 h-4 w-4 flex items-center justify-center"><FaLock size={16} /></span> Your information is encrypted.
        </div>
      </div>
    </div>
  );
}
