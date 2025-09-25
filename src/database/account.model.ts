import { Schema, models, model, Document, Types } from "mongoose";

export interface IAccount {
  user: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  authProvider: "github" | "google";
  authProviderAccountId: string;
}

export interface IAccountDoc extends IAccount, Document {}

const AccountSchema = new Schema<IAccount>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    authProvider: { type: String, enum: ["github", "google"], required: true },
    authProviderAccountId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Account = models?.Accounts || model<IAccount>("Account", AccountSchema);

export default Account;
