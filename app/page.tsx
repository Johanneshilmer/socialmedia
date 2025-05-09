"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        console.error("Failed to fetch providers:", error);
      }
    };

    fetchProviders();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar />
      <div>
        {session ? (
          <>
            <h1>Welcome, {session.user?.name}</h1>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <div>
              <h1>Sign In</h1>
              {providers &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name} style={{ margin: "10px" }}>
                    <button onClick={() => signIn(provider.id)}>
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
