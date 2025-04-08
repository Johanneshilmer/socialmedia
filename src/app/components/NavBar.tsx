import React from "react";
import Link from "next/link";

interface NavBarProps {
  isLoggedIn: boolean;
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
  return (
    <div className="container nav-bar">
      <div>
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <span>Login</span>
            </Link>
            <Link href="/register">
              <span>Register</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/logout">
              <span>Logout</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
