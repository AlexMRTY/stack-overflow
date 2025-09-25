import { Schema, models, model, Document, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  targetType: "Question" | "Answer";
  targetId: Types.ObjectId;
  action: "view" | "upvote" | "downvote" | "accept" | "answer";
}

export interface IInteractionDoc extends IInteraction, Document {}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetType: { type: String, enum: ["Question", "Answer"], required: true },
    targetId: { type: Schema.Types.ObjectId, required: true },
    action: {
      type: String,
      enum: ["view", "upvote", "downvote", "accept", "answer"],
      required: true,
    },
  },
  { timestamps: true }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
