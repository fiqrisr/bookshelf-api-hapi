import { ServerRoute } from '@hapi/hapi';

import { addBook, getBooks } from './handler';

const routes: ServerRoute[] = [
	{
		path: '/',
		method: 'GET',
		handler: () => 'Hello from Hapi'
	},
	{
		path: '/books',
		method: 'GET',
		handler: getBooks
	},
	{
		path: '/books',
		method: 'POST',
		handler: addBook
	}
];

export { routes };
