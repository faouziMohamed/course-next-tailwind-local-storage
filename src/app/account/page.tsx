"use client";

import { useEffect, useState } from "react";
import { SIGNUP_KEY, User } from "../constant";
import Link from "next/link";
import Image from "next/image";

export default function MyAccountPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const userDataStr = localStorage.getItem(SIGNUP_KEY);
    if (!userDataStr) {
      alert("Ahh zuut, tu n'est pas connecté");
      return;
    }

    const data = JSON.parse(userDataStr) as User;
    setUser(data);
  }, [isMounted]);

  if (!user) {
    return (
      <div>
        <p>Hello bro, you must Sign In first.</p>{" "}
        <Link href={"/"}>Sign Up</Link>
      </div>
    );
  }

  return (
    <div className='p-4'>
      <p>Bonjour {user.firstname},</p>
      <div className='flex flex-col gap-2 shadow-xl border-gray-600 p-2 rounded-lg'>
        <div className='w-40 h-40'>
          <Image
            src={user.avatar}
            width={300}
            height={300}
            alt='Faouzi avatar'
            className='object-cover w-full h-full rounded-full drop-shadow-2xl'
          />
        </div>
        <p className='rounded bg-gray-800 text-slate-50 px-2 py-2'>
          {user.firstname + " " + user.lastname}
        </p>
        <p className='rounded bg-gray-800 text-slate-50 px-2 py-2'>
          {user.email}
        </p>
        <p className='rounded bg-gray-800 text-slate-50 px-2 py-2'>
          {user.password}
        </p>
      </div>
      <Link href='/my-orders'>Mes commandes</Link>
    </div>
  );
}
