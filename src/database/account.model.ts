import { InferSchemaType, model, models, Schema } from "mongoose";

const AccountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    authProvider: { type: String, enum: ["github", "google"], required: true },
    authProviderAccountId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

type IAccount = InferSchemaType<typeof AccountSchema>;
const Account = models?.Accounts || model<IAccount>("Account", AccountSchema);

export default Account;
