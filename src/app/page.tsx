import NavBar from "./components/NavBar";
import List from "./components/List";

export default function Home() {
  return (
    <div>
      <NavBar />
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
