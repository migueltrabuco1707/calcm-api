import mongoose from 'mongoose';
import { envs } from './env';

export async function connectDB(): Promise<void> {
	await mongoose.connect(envs.databaseUrl).then(() => {
		console.log('Database connected');
	});
}

export async function disconnectDB(): Promise<void> {
	await mongoose.disconnect().then(() => {
		console.log('Database disconnected');
	});
}
