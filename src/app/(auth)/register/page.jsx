import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <form action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 container mx-auto">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">First Name</label>
          <input type="text" className="input" placeholder="First Name" />

          <label className="label">Last Name</label>
          <input type="text" className="input" placeholder="Last Name" />

          <label className="label">Phone Number</label>
          <input type="text" className="input" placeholder="Phone Number" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>

          <p>
            You already have an account,{" "}
            <Link href={"/login"} className="text-blue-500">
              Login
            </Link>{" "}
            here.
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
