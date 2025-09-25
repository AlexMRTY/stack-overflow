import { Schema, models, model, Document, Types } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  tags: Types.ObjectId[];
  author: Types.ObjectId;
  views: number;
  upVotes: number;
  downVotes: number;
  score: number;
  nrOfAnswers: number;
  answers: number;
  isAnswered: boolean;
}

export interface IQuestionDoc extends IQuestion, Document {}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true, minLength: 10, maxLength: 150 },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    views: { type: Number, default: 0, min: 0 },
    upVotes: { type: Number, default: 0, min: 0 },
    downVotes: { type: Number, default: 0, min: 0 },
    score: { type: Number, default: 0 },
    nrOfAnswers: { type: Number, default: 0, min: 0 },
    answers: { type: Number, default: 0, min: 0 },
    isAnswered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
