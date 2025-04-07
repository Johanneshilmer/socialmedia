import React from "react";

export default function page() {
  return (
    <div>
      <div className="container">
        <h1>Create A Post</h1>
      </div>
      <div className="container">
        <form action="/api/post" method="POST">
          <textarea name="content" placeholder="Content" required></textarea>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
