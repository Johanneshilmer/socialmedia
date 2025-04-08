"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, email }),
      });

      if (res.ok) {
        alert("Användare skapad!");
        setName("");
        setEmail("");
      } else {
        setError("Något gick fel.");
      }
    } catch (error) {
      setError("Det gick inte att nå servern.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className="container">
        <div>
          <label className="block">Namn</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 w-full"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block">E-post</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-1 w-full"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Skapar..." : "Skapa användare"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
}
