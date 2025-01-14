"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center mb-2 text-xl font-bold">Login with OAuth</div>
      <div className="flex flex-col bg-slate-400 rounded-md max-w-[300px] p-5 gap-2 mx-auto">
        <button
          className="p-2 bg-blue-400 text-white w-[60%] mx-auto rounded-md hover:bg-blue-800"
          type="submit"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/my-account",
            })
          }
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default page;
