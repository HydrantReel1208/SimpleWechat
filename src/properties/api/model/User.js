import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include your name"]
  },
  password: {
    type: String,
    required: [true, "Please Include your password"]
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name },
    "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (name, password) => {
  const user = await User.findOne({ name });
  if (!user) {
    throw new Error({ error: "Invalid login user" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Password is not match" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
