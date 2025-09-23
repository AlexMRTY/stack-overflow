import Link from "next/link";
import React from "react";

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <>
      <li key={question._id} className="border-b border-dark200_light700 pb-4">
        <Link href={`/questions/${question._id}`}>
          <h2 className="h2-semibold text-dark100_light900 hover:underline">
            {question.title}
          </h2>
        </Link>
        <p className="mt-2 text-dark300_light600">{question.description}</p>
      </li>
    </>
  );
};

export default QuestionCard;
