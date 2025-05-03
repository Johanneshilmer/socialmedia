import NavBar from "../components/NavBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <NavBar />
      <div></div>
      {session.user?.name}
    </>
  );
}
