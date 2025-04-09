"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function page() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  async function handleSubmitPost(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert("Inlägg skapat!");
      setTitle("");
      setContent("");
    } else {
      alert("Något gick fel.");
    }
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmitPost} className="container">
        <div>
          <label className="block">Titel</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1 w-full"
          />
        </div>
        <div>
          <label className="block">Innehåll</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Skapa Inlägg
        </button>
      </form>
    </>
  );
}
