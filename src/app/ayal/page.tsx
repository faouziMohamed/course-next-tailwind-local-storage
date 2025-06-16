"use client";

import { loginUserAction } from "@/actions/auth.actions";
import { useState } from "react";

export default function AyaldinePage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // with fetch
    const response = await fetch("/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      console.error("Login failed:", response.statusText);
      alert("Login failed. Please try again.");
      return;
    }
    console.log("Response status:", response.status);
    const json = await response.json();
    console.log("Response JSON:", json);
    // end with fetch

    // with server action
    const res = await loginUserAction({ email, password, madzi: "ayaldine" });
    console.log("LOGIN RESPONSE =", res);
    if (res.status === 200) {
      alert("Login successful!");
      // Redirect to account page or perform other actions
    }
    if (res.status === 401) {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className='p-4'>
      <form
        onSubmit={onSubmit}
        className='p-4 rounded-2xl w-full flex flex-col gap-3 border'>
        <div>
          <label className='block pb-2'>email</label>
          <input
            className='w-full border rounded-xl px-2'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block pb-2'>password</label>
          <input
            className='w-full border rounded-xl px-2'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className='bg-blue-500 text-white rounded-xl px-4 py-2'>
          Login
        </button>
      </form>
    </div>
  );
}
