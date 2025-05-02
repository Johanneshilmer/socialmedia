import React from "react";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.navbar_main}>
      <div className={style.navbar_left}>
        <a className={style.logo} href="/">
          My Logo
        </a>
      </div>
      <div className={style.navbar_mid}>
        <a href="/posts">Posts</a>
        <a href="/">New Post</a>
      </div>
      <div className={style.navbar_right}>
        <a href="/">Register</a>
        <a href="/">Login</a>
        <a href="/">Logout</a>
      </div>
    </div>
  );
}
