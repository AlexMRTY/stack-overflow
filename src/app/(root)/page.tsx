import { auth, signOut } from "@/auth";
import ROUTES from "../constants/routes";
import { Button } from "@/src/components/ui/button";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);
  return (
    <div>
      <h1 className="h1-bold">Hello, Next.js! right</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
}
