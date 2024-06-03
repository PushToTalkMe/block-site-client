import { Inter } from "next/font/google";
import { authControllerSignIn } from "@/shared/api/generated";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  useEffect(() => {
    authControllerSignIn({ email: "test@mail.ru", password: "123456" }).then(
      console.log,
    );
  }, []);
  return <div></div>;
}
