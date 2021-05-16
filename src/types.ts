export interface IResponse {
	status: string;
	message?: string;
	data?: Record<string, unknown> | null;
}

export interface Book {
	id: string;
	name: string;
	year: number;
	author: string;
	summary: string;
	publisher: string;
	pageCount: number;
	readPage: number;
	reading: boolean;
	finished: boolean;
	insertedAt: string;
	updatedAt: string;
}

export interface BookPayload {
	name: string;
	year: number;
	author: string;
	summary: string;
	publisher: string;
	pageCount: number;
	readPage: number;
	reading: boolean;
}
