import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  userName: string;
  bio?: string;
  image: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}

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

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
