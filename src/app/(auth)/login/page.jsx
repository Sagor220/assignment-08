"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          {...register("email")}
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          {...register("password")}
          type="password"
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Login</button>
        <p>
          If you don not have any account, please{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default LoginPage;
