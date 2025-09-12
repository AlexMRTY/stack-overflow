import { Button } from "@/src/components/ui/button";
import ROUTES from "../constants/routes";
import Link from "next/link";
import LocalSearch from "@/src/components/search/LocalSearch";

export default async function Home() {
  return (
    <div>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">Local Search</section>

      <LocalSearch
        imgSrc="/icons/search.svg"
        route="/"
        otherClasses="flex-1"
        placeholder="Search..."
      />
    </div>
  );
}
