"use client";
import NavBar from "./components/NavBar";
import List from "./components/List";
import React from "react";
import { prisma } from "@/lib/prisma";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false); // Slänger in sen
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <h1>hek</h1>
      <div className="container">
        <h1>Welcome to the Home Page</h1>
      </div>
      <div className="container">
        <List isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}
