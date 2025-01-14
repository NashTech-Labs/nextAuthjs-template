import { SessionProvider } from "next-auth/react";
import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-80 gap-4">
      {/* <div className="max-w-5xl"> */}
      <div className="text-xl font-bold">Home</div>
      <SessionProvider>
        <ClientComponent />
      </SessionProvider>
      <ServerComponent />
      {/* </div> */}
    </div>
  );
}
