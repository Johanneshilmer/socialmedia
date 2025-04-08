import { useEffect } from "react";
import React from "react";
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
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-b p-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.content}</p>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga inlägg tillgängliga.</p>
      )}
    </div>
  );
}
