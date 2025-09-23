import ROUTES from "@/src/app/constants/routes";
import { getTimeStamp } from "@/src/lib/utils";
import Link from "next/link";
import React from "react";

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(question.createdAt)}
          </span>
        </div>
        <Link href={ROUTES.QUESTION(question._id)}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
            {question.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
