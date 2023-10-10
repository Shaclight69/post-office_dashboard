import mongoose from "mongoose";
//import validator from "validator"
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled !");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email !");
  }

  //const match = await bcrypt.compare(password, user.password);

  const match = password == user.password;

  if (!match) {
    throw Error("Incorrect password !");
  }
  return user;
};

const User = mongoose.model("User", UserSchema);
export default User;
