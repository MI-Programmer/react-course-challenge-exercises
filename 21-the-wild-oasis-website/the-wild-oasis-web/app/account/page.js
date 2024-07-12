import { auth } from "../_lib/Auth";

export const metadata = {
  title: "Guest area",
};

const Page = async () => {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Your reservations, {firstName}
    </h2>
  );
};

export default Page;
