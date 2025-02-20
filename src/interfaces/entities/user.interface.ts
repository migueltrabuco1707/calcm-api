export interface IUser {
	id: string;
	email: string;
	code: string | null;
	createdAt: Date;
	updatedAt: Date;
	codeCreatedAt: Date | null;
}
