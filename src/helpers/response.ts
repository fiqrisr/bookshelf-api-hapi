import { IResponse } from '../types';

export const newResponse = (res: IResponse): IResponse => {
	const { status, message, data } = res;

	return {
		status,
		message,
		data
	};
};
