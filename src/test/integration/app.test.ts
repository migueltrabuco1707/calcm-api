import supertest from 'supertest';
import { app } from '../../app';

describe('Test server instance', () => {
	test('Server must be running', async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(typeof response.body.message).toBe('string');
	});
});
