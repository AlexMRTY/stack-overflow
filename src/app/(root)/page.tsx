import { Button } from "@/src/components/ui/button";
import ROUTES from "../constants/routes";
import Link from "next/link";
import LocalSearch from "@/src/components/search/LocalSearch";
import HomeFilter from "@/src/components/filters/HomeFilter";

const mockQuestions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React. Any suggestions?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 2,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What is TypeScript?",
    description: "Can someone explain what TypeScript is?",
    tags: [{ _id: "3", name: "TypeScript" }],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 5,
    answers: 1,
    views: 50,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: SearchParams) {
  const { query = "", filter = "" } = await searchParams;
  // In a real application, you would fetch questions from an API or database
  // based on the search query. Here, we use mock data for demonstration.

  const questions = [...mockQuestions];
  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchesFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        )
      : true;
    return matchesQuery && matchesFilter;
  });

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
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          route="/"
          otherClasses="flex-1"
          placeholder="Search..."
        />
      </section>
      <HomeFilter />
      <section className="mt-10 flex w-full flex-col gap-6">
        {questions.length === 0 ? (
          <p className="text-dark300_light600">No questions found.</p>
        ) : (
          <ul className="flex flex-col gap-6">
            {filteredQuestions.map((question) => (
              <li
                key={question._id}
                className="border-b border-dark200_light700 pb-4"
              >
                <Link href={`/questions/${question._id}`}>
                  <h2 className="h2-semibold text-dark100_light900 hover:underline">
                    {question.title}
                  </h2>
                </Link>
                <p className="mt-2 text-dark300_light600">
                  {question.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
