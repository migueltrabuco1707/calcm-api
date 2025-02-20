import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/entities';
import { v4 as uuid } from 'uuid';

const userSchema = new Schema<IUser>(
	{
		id: { type: String, required: false, default: uuid() },
		email: { type: String, required: true, unique: true },
		code: { type: Number, required: false },
		codeCreatedAt: { type: Date, required: false },
	},
	{ timestamps: true },
);

export const UserModel = model('users', userSchema);
