import React from "react";
import { useRouter } from "next/navigation";
import "./ButtonLink.css";

interface ButtonLinkProps {
  text: string;
  link: string;
}

export default function ButtonLink({ text, link }: ButtonLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button className="link-button" onClick={handleClick}>
      {text}
    </button>
  );
}
