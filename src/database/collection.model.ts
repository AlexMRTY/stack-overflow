import { Schema, models, model, Document, Types } from "mongoose";

export interface ICollection {
  name: string;
  description: string;
  creator: Types.ObjectId;
  questions?: Types.ObjectId[];
}

export interface ICollectionDoc extends ICollection, Document {}

const CollectionSchema = new Schema<ICollection>(
  {
    name: { type: String, required: true },
    description: { type: String, default: "", maxLength: 500 },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

const Collection =
  models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
