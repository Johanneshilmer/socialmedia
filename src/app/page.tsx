"use client";
import NavBar from "./components/NavBar";
import List from "./components/List";
import React from "react";
import { prisma } from "@/lib/prisma";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false); // Slänger in sen
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple example of a Next.js app.</p>
      </div>
      <div className="container">
        <List />
      </div>
    </div>
  );
}
