import { InferSchemaType, model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    bio: { type: String, default: "" },
    image: { type: String, required: true },
    location: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

type IUser = InferSchemaType<typeof UserSchema>;
const User = models?.User || model<IUser>("User", UserSchema);

export default User;
