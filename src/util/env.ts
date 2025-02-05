import 'dotenv/config';
import { IEnv } from '../interfaces/general';

function loadAndValidadeEnv(envName: string): string {
	const env: string | undefined = process.env[envName];

	if (!env) {
		throw new Error(`Environment variable ${envName} is required`);
	}

	return env;
}

export const envs: IEnv = {
	port: loadAndValidadeEnv('PORT'),
	mongoUrl: loadAndValidadeEnv('MONGO_URL'),
	mailUser: loadAndValidadeEnv('MAIL_USER'),
	mailPassword: loadAndValidadeEnv('MAIL_PASSWORD'),
	secret: loadAndValidadeEnv('SECRET'),
};
