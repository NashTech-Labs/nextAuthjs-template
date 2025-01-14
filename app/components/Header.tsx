import { auth, signOut } from "@/auth/authSetup";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const session = await auth();
  return (
    <nav className="p-4 bg-slate-400 m-2 rounded-lg text-white">
      <ul className="flex justify-between">
        <li>
          <ul className="flex justify-between min-w-[150px]">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/my-account"}>My Account</Link>
            </li>
          </ul>
        </li>
        <li>
          {session?.user ? (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
              className="flex justify-between items-center min-w-[80px]"
            >
              <button type="submit">Logout</button>
              {/* <Image
                src={session.user.image || ""}
                alt={session.user.name || ""}
                className="rounded-full w-6 h-6 object-cover"
                width={12}
                height={12}
              /> */}
            </form>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
