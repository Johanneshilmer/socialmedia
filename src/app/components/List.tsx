import { useEffect } from "react";
import React from "react";
import "./List.css";
// Typdefinition för Post
type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export default function List() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const data: Post[] = await res.json();
        setPosts(data);
      } else {
        console.error("Kunde inte hämta inlägg");
      }
    } catch (error) {
      console.error("Fel vid hämtning av inlägg", error);
    }
  };

  // Anropa fetchPosts när komponenten laddas
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Inlägg</h1>
      {posts.length > 0 ? (
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post.id} className="container post-main">
              <div className="post-header">
                <div className="post-title">
                  <span className="font-bold">{post.title}</span>
                </div>
                <div className="post-time">
                  <span>{new Date(post.createdAt).toLocaleString()}</span>
                </div>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga inlägg tillgängliga.</p>
      )}
    </div>
  );
}
