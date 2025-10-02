"use client";
import { useState } from "react";
import { Link } from "react-router";
import Btn_auth_with_google from "./auth.google";

export default function AuthForm({ action }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: gọi API đăng ký
    console.log("Register data:", formData);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800 dark:text-slate-100">
        {action === "login" ? "Đăng nhập" : "Đăng ký tài khoản"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        {action === "register" && (
          <div>
            <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>
        )}
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Confirm Password */}
        {action === "register" && (
          <div>
            <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition cursor-pointer"
        >
          {action === "login" ? "Đăng nhập" : "Đăng ký"}
        </button>
      </form>

      <Btn_auth_with_google action={action} />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        {action === "login" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
        <Link
          to={action === "login" ? "/register" : "/login"}
          className="text-blue-600 hover:underline"
        >
          {action === "login" ? "Đăng ký" : "Đăng nhập"}
        </Link>
      </p>
    </div>
  );
}
