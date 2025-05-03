"use client";
import React from "react";
import style from "./NavBar.module.css";
import { signOut } from "next-auth/react";

export default function NavBar() {
  return (
    <div className={style.navbar_main}>
      <div className={style.navbar_left}>
        <a className={style.logo} href="/">
          My Logo
        </a>
      </div>
      <div className={style.navbar_right}>
        <a href="/posts">Posts</a>
        <a href="/">New Post</a>
        <a onClick={() => signOut({ callbackUrl: "/" })}>Logout</a>
      </div>
    </div>
  );
}
