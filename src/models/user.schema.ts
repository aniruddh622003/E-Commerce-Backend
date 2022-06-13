import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const userScema = new mongoose.Schema({
  username: String,
  password: String,
  seller: {
    type: Boolean,
    default: false,
  },
  address: {
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    pin: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

userScema.pre('save', async function (next: Function) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
