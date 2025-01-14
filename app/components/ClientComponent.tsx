"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClientComponent = () => {
  const session = useSession();
  const [mount, setMount] = useState(true);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      setMount(false);
    }
  }, [session]);

  if (!mount) {
    return null;
  }
  return (
    <div className="flex flex-col items-center shadow-md rounded p-4 justify-between bg-slate-300 gap-2">
      Client Component
      <div className="shadow-md rounded p-4 bg-slate-400 text-white">
        Protected Data in Client Component
      </div>
    </div>
  );
};

export default ClientComponent;
