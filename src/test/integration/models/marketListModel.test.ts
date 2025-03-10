import { connectDB, disconnectDB } from '../../../util';
import { MarketListModel } from '../../../models';
import { IMarketList } from '../../../interfaces/entities';

const marketListName = 'market';

describe('Test CRUD functions from market list model and the database connection', () => {
	beforeAll(async () => {
		connectDB();
		try {
			await MarketListModel.deleteMany({ marketName: marketListName });
		} catch (error) {
			console.log(error);
		}
	});

	test('Create market list in database: listCreated must be defined', async () => {
		let listCreated: IMarketList | null;
		try {
			listCreated = await MarketListModel.create({
				marketName: marketListName,
			});
		} catch (error) {
			console.log(error);
			listCreated = null;
		}

		expect(listCreated).not.toBeNull();
		expect(listCreated?.marketName).toStrictEqual(marketListName);
		expect(listCreated?.budget).toStrictEqual(0);
		expect(listCreated?.id).toBeDefined();
		expect(listCreated?.totalValue).toStrictEqual(0);
		expect(listCreated?.itemsAmount).toStrictEqual(0);
		expect(listCreated?.createdAt).toBeDefined();
	});

	test('Get market list in database: listDocument must be defined', async () => {
		let listDocument: IMarketList | null;
		try {
			listDocument = await MarketListModel.findOne({
				marketName: marketListName,
			});
		} catch (error) {
			console.log(error);
			listDocument = null;
		}

		expect(listDocument).not.toBeNull();
		expect(listDocument?.marketName).toStrictEqual(marketListName);
		expect(listDocument?.budget).toStrictEqual(0);
		expect(listDocument?.id).toBeDefined();
		expect(listDocument?.totalValue).toStrictEqual(0);
		expect(listDocument?.itemsAmount).toStrictEqual(0);
		expect(listDocument?.createdAt).toBeDefined();
	});

	test('Update market list in database: listUpdated must be defined with new code value', async () => {
		let listUpdated: IMarketList | null;
		const newBudget: number = 100.2;
		try {
			listUpdated = await MarketListModel.findOneAndUpdate(
				{ marketName: marketListName },
				{ budget: newBudget },
				{ new: true },
			);
		} catch (error) {
			console.log(error);
			listUpdated = null;
		}

		expect(listUpdated).not.toBeNull();
		expect(listUpdated?.marketName).toStrictEqual(marketListName);
		expect(listUpdated?.budget).toStrictEqual(newBudget);
		expect(listUpdated?.id).toBeDefined();
		expect(listUpdated?.totalValue).toStrictEqual(0);
		expect(listUpdated?.itemsAmount).toStrictEqual(0);
		expect(listUpdated?.createdAt).toBeDefined();
	});

	afterAll(async () => {
		try {
			await MarketListModel.deleteMany({ marketName: marketListName });
		} catch (error) {
			console.log(error);
		}
		await disconnectDB();
	});
});
