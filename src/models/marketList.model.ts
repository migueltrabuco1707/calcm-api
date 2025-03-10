import { Schema, model } from 'mongoose';
import { IMarketList } from '../interfaces/entities';
import { v4 as uuid } from 'uuid';

const marketListSchema = new Schema<IMarketList>(
	{
		id: { type: String, required: false, default: uuid() },
		marketName: { type: String, required: true },
		budget: { type: Number, required: false, default: 0 },
		totalValue: { type: Number, required: false, default: 0 },
		itemsAmount: { type: Number, required: false, default: 0 },
	},
	{ timestamps: true },
);

export const MarketListModel = model('marketLists', marketListSchema);
