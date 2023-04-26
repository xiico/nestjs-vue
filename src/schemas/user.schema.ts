import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { first: String, last: String },
  nickname: String,
  formOfAddress: String,
  photo: String,
  password: String,
  info: String,
});
