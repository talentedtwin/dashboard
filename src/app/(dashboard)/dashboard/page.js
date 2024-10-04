import dynamic from "next/dynamic";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const Editor = dynamic(() => import("@/app/components/Dashboard/Editor"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="flex w-full items-center justify-items-center min-h-screen h-full p-8 pb-20">
      <main className="flex flex-col gap-8 items-center  w-full">
        <p>Welcome to the dashboard!</p>
        <Editor />
        <LogoutLink>Log out</LogoutLink>
      </main>
    </div>
  );
}
