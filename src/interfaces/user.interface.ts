import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: { first: string; last: string };
  readonly nickname: string;
  readonly formOfAddress: string;
  readonly photo: string;
  readonly password: string;
  readonly info: string;
}
