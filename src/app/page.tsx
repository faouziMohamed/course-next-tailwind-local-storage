"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SIGNUP_KEY, User } from "./constant";

export default function Home() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
      avatar: avatar.trim(),
    };

    if (!data.firstname || !data.lastname || !data.email || !data.password) {
      alert("Hey there! stoooop");
    }

    const dataStr = JSON.stringify(data);
    localStorage.setItem(SIGNUP_KEY, dataStr);

    router.push("/account");
  };

  return (
    <div className='p-4'>
      <form
        className='p-4 rounded-2xl w-full flex flex-col gap-3 border'
        onSubmit={onSubmit}>
        <div>
          <label className='block pb-2'>Avatar</label>
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className='w-full border rounded-xl px-2'
            required
          />
        </div>
        <div>
          <label className='block pb-2'>First Name</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className='w-full border rounded-xl px-2'
            required
          />
        </div>
        <div>
          <label className='block pb-2'>Last Name</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className='w-full border rounded-xl px-2'
            required
          />
        </div>
        <div>
          <label className='block pb-2'>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border rounded-xl px-2'
            type='email'
            required
          />
        </div>
        <div>
          <label className='block pb-2'>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border rounded-xl px-2'
            type='password'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-700 cursor-pointer hover:bg-blue-600 active:bg-blue-800 text-white rounded-lg'>
          Sign up
        </button>
      </form>
    </div>
  );
}
