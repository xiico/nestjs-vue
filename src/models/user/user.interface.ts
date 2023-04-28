import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: { first: string; last: string };
  readonly nickname: string;
  readonly formOfAddress: string;
  readonly photo: {
    public_id: string;
    version: number;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    url: string;
    secure_url: string;
  };
  readonly password: string;
  readonly info: string;
}
