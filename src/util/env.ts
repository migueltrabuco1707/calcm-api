import 'dotenv/config';
import { IEnv } from '../interfaces/general';

/**
 * Loads and validates the specified environment variable.
 *
 * @param envName - The name of the environment variable to load.
 * @returns The value of the environment variable as a string.
 * @throws An error if the environment variable is not defined.
 */

function loadAndValidadeEnv(envName: string): string {
	const env: string | undefined = process.env[envName];

	if (!env) {
		throw new Error(`Environment variable ${envName} is required`);
	}

	return env;
}

export const envs: IEnv = {
	port: loadAndValidadeEnv('PORT'),
	databaseUrl: loadAndValidadeEnv('DATABASE_URL'),
	mailUser: loadAndValidadeEnv('MAIL_USER'),
	mailPassword: loadAndValidadeEnv('MAIL_PASSWORD'),
	secret: loadAndValidadeEnv('SECRET'),
};
