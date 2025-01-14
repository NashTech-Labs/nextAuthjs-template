import { auth } from "@/auth/authSetup";
import React from "react";

const ServerComponent = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col items-center shadow-md rounded p-4 justify-between bg-slate-300 gap-2">
      Server Component
      <div className="shadow-md rounded p-4 bg-slate-400 text-white">
        Protected Data in Server Component
      </div>
    </div>
  );
};

export default ServerComponent;
