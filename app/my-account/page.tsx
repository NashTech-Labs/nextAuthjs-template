import { auth } from "@/auth/authSetup";

const Profile = async () => {
  const session = await auth();
  if (!session) {
    return (
      <>
        <div>You are not logged in</div>
      </>
    );
  }

  const user = session.user;

  const userInfo = {
    name: user?.name,
    email: user?.email,
  };
  return (
    <>
      <div className="text-center text-xl font-bold">
        This is my account page
      </div>
      <pre className="bg-slate-600 p-2 rounded-md text-white m-2">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
    </>
  );
};

export default Profile;
