import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container nav-bar">
      <div>
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <span>Login</span>
        </Link>

        <Link href="/login">
          <span>Register</span>
        </Link>

        <Link href="/">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
