import { envs } from '../../util/env';

describe('Test environment variables', () => {
	test('Port must be defined', () => {
		expect(envs.port).toBeDefined();
		expect(envs.port).not.toBeNull();
		expect(typeof envs.port).toBe('string');
	});

	test('MongoDB url must be defined', () => {
		expect(envs.databaseUrl).toBeDefined();
		expect(envs.databaseUrl).not.toBeNull();
		expect(typeof envs.databaseUrl).toBe('string');
	});

	test('Mail user must be defined', () => {
		expect(envs.mailUser).toBeDefined();
		expect(envs.mailUser).not.toBeNull();
		expect(typeof envs.mailUser).toBe('string');
	});

	test('Mail password must be defined', () => {
		expect(envs.mailPassword).toBeDefined();
		expect(envs.mailPassword).not.toBeNull();
		expect(typeof envs.mailPassword).toBe('string');
	});

	test('Secret must be defined', () => {
		expect(envs.secret).toBeDefined();
		expect(envs.secret).not.toBeNull();
		expect(typeof envs.secret).toBe('string');
	});
});
