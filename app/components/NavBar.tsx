import React from "react";
import { useSession } from "next-auth/react";

export default function NavBar() {
  return (
    <div>
      <div>Right</div>
      <div>Left</div>
    </div>
  );
}
