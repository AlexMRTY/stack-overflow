import { Schema, models, model, Document, Types } from "mongoose";

export interface IAnswer {
  content: string;
  author: Types.ObjectId;
  question: Types.ObjectId;
  upVotes: number;
  downVotes: number;
  score: number;
  acceptedAt?: Date | null;
}

export interface IAnswerDoc extends IAnswer, Document {}

const AnswerSchema = new Schema<IAnswer>(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    upVotes: { type: Number, default: 0, min: 0 },
    downVotes: { type: Number, default: 0, min: 0 },
    score: { type: Number, default: 0, min: 0 },
    acceptedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
