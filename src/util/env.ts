import 'dotenv/config';

function loadAndValidadeEnv(envName: string): string {
	const env: string | undefined = process.env[envName];

	if (!env) {
		throw new Error(`Environment variable ${envName} is required`);
	}

	return env;
}

export const envs: object = {
	port: loadAndValidadeEnv('PORT'),
	mongoUrl: loadAndValidadeEnv('MONGO_URL'),
	mailUser: loadAndValidadeEnv('MAIL_USER'),
	mailPass: loadAndValidadeEnv('MAIL_PASS'),
	secret: loadAndValidadeEnv('SECRET'),
};
