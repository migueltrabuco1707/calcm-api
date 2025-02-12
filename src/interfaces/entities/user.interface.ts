export interface IUser {
	id: string;
	email: string;
	code: string | null;
	createdAt: Date;
	codeCreatedAt: Date | null;
}
