import { Schema, models, model, Document, Types } from "mongoose";

export interface IVote {
  user: Types.ObjectId;
  question?: Types.ObjectId;
  answer?: Types.ObjectId;
  value: 1 | -1;
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVote>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    answer: { type: Schema.Types.ObjectId, ref: "Answer" },
    value: { type: Number, enum: [1, -1], required: true },
  },
  { timestamps: true }
);

VoteSchema.pre("save", function () {
  const hasQuestion = !!this.question;
  const hasAnswer = !!this.answer;
  if (hasQuestion === hasAnswer) {
    throw new Error("Vote must target exactly one: question OR answer");
  }
});

VoteSchema.index({ user: 1, question: 1 }, { unique: true, sparse: true });
VoteSchema.index({ user: 1, answer: 1 }, { unique: true, sparse: true });

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
