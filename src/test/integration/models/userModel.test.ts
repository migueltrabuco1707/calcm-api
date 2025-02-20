import { connectDB, disconnectDB } from '../../../util';
import { UserModel } from '../../../models';
import { IUser } from '../../../interfaces/entities';

const userData = {
	email: 'user@email.com',
	code: 2222,
	codeCreatedAt: new Date(),
};

describe('Test CRUD functions from user model and the database connection', () => {
	beforeAll(async () => {
		connectDB();
		try {
			await UserModel.deleteMany({ email: userData.email });
		} catch (error) {
			console.log(error);
		}
	});

	test('Create user in database: userCreated must be defined', async () => {
		let userCreated: IUser | null;
		try {
			userCreated = await UserModel.create(userData);
		} catch (error) {
			console.log(error);
			userCreated = null;
		}

		expect(userCreated).not.toBeNull();
		expect(userCreated?.email).toStrictEqual(userData.email);
		expect(userCreated?.code).toStrictEqual(userData.code);
		expect(userCreated?.id).toBeDefined();
		expect(userCreated?.codeCreatedAt).toStrictEqual(userData.codeCreatedAt);
		expect(userCreated?.createdAt).toBeDefined();
	});

	test('Get user in database: userDocument must be defined', async () => {
		let userDocument: IUser | null;
		try {
			userDocument = await UserModel.findOne({ email: userData.email });
		} catch (error) {
			console.log(error);
			userDocument = null;
		}

		expect(userDocument).not.toBeNull();
		expect(userDocument?.email).toStrictEqual(userData.email);
		expect(userDocument?.code).toStrictEqual(userData.code);
		expect(userDocument?.id).toBeDefined();
		expect(userDocument?.codeCreatedAt).toStrictEqual(userData.codeCreatedAt);
		expect(userDocument?.createdAt).toBeDefined();
	});

	test('Update user in database: userDocument must be defined with new code value', async () => {
		let userDocument: IUser | null;
		try {
			userDocument = await UserModel.findOne({ email: userData.email });
		} catch (error) {
			console.log(error);
			userDocument = null;
		}

		expect(userDocument).not.toBeNull();
		expect(userDocument?.email).toStrictEqual(userData.email);
		expect(userDocument?.code).toStrictEqual(userData.code);
		expect(userDocument?.id).toBeDefined();
		expect(userDocument?.codeCreatedAt).toStrictEqual(userData.codeCreatedAt);
		expect(userDocument?.createdAt).toBeDefined();
	});

	afterAll(async () => {
		try {
			await UserModel.deleteMany({ email: userData.email });
		} catch (error) {
			console.log(error);
		}
		await disconnectDB();
	});
});
