"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F3EF]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-4">
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-tl-lg rounded-bl-lg font-semibold text-sm transition-colors duration-200 ${activeTab === 'signin' ? 'bg-[#234052] text-white' : 'bg-[#F9F3EF] text-[#234052]'}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 rounded-tr-lg rounded-br-lg font-semibold text-sm transition-colors duration-200 ${activeTab === 'signup' ? 'bg-[#F9F3EF] text-[#234052]' : 'bg-[#F9F3EF] text-[#234052]'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        {/* Welcome Message */}
        <h2 className="text-xl font-bold text-[#234052] mb-2 text-center">Welcome Back</h2>
        <p className="text-[#456882] mb-6 text-center">Sign in to access your account</p>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-[#234052] font-semibold mb-1">Email Address</label>
            <input type="email" className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="relative">
            <label className="block text-[#234052] font-semibold mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} className="w-full bg-[#F9F3EF] border border-[#D2C1B6] rounded-md p-3 focus:border-[#456882] focus:shadow focus:outline-none" placeholder="Enter your password" />
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-9 text-[#456882]">
              <span className="h-5 w-5 flex items-center justify-center">
                {showPassword ? (
                  <FaEyeSlash size={20} aria-label="Hide password" />
                ) : (
                  <FaEye size={20} aria-label="Show password" />
                )}
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-[#234052]">Remember me</label>
            </div>
            <Link href="/forgot-password" className="text-sm text-[#456882] hover:underline">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full bg-[#234052] hover:bg-[#456882] text-white font-bold py-3 rounded-md transition-colors duration-300">Sign In</button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <span className="flex-1 h-px bg-[#D2C1B6]" />
          <span className="mx-3 text-[#D2C1B6] font-semibold">or</span>
          <span className="flex-1 h-px bg-[#D2C1B6]" />
        </div>
        {/* Social Buttons */}
        <div className="flex flex-col gap-3 mb-4">
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#D2C1B6] rounded-md py-2 font-medium text-[#234052] hover:bg-[#F9F3EF] transition-colors">
            <span className="h-5 w-5 flex items-center justify-center text-[#EA4335]"><FaGoogle size={20} /></span> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#D2C1B6] rounded-md py-2 font-medium text-[#234052] hover:bg-[#F9F3EF] transition-colors">
            <span className="h-5 w-5 flex items-center justify-center text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M16.365 17.365c-1.13 1.13-2.63 1.635-4.365 1.635s-3.235-.505-4.365-1.635C2.505 16.235 2 14.735 2 13c0-1.735.505-3.235 1.635-4.365C4.765 7.505 6.265 7 8 7c1.735 0 3.235.505 4.365 1.635C15.495 9.765 16 11.265 16 13c0 1.735-.505 3.235-1.635 4.365z"/></svg></span> Continue with Apple
          </button>
        </div>
        {/* Footer */}
        <div className="text-xs text-center text-[#456882] mt-6">
          By signing in, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
