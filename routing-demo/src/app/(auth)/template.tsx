"use client";

import Link from "next/link";
import React, {useState} from "react";
import {usePathname} from "next/navigation";
import "./styles.css";

const navLinks = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
  {name: "Forgot Password", href: "/forgot-password"},
];

function AuthLayout({children}: {children: React.ReactNode}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-5" : "text-blue-500 mr-5"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

export default AuthLayout;
