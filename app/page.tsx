"use client";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    console.log(res);
    if (res?.ok) {
      router.push("/posts");
    } else {
      setError("Felaktiga uppgifter");
    }
  }

  async function fetchSession() {
    const session = await getSession();
  }

  async function jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.name = user.name;
    }
    return token;
  }

  async function session({ session, token }) {
    if (token) {
      session.user = {
        id: token.id,
        name: token.name,
      };
    }
    return session;
  }

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Welcome to the Social SocialMedia</h1>
        </div>
        <form onSubmit={handleLogin} className={styles.login_form}>
          <h1>Login</h1>
          <input
            name="username"
            placeholder="Username"
            className={styles.username}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={styles.password}
          />
          <button type="submit">Logga in</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className={styles.register}>
          <a href="/">Register</a>
          <a href="/">Recover Password</a>
        </div>
      </div>
    </>
  );
}
