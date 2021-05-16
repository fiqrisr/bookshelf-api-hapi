import { ServerRoute } from '@hapi/hapi';

import {
	addBook,
	getBook,
	getAllBooks,
	updateBook,
	deleteBook
} from './handler';

const routes: ServerRoute[] = [
	{
		path: '/',
		method: 'GET',
		handler: () => 'Hello from Hapi'
	},
	{
		path: '/books',
		method: 'GET',
		handler: getAllBooks
	},
	{
		path: '/books',
		method: 'POST',
		handler: addBook
	},
	{
		path: '/books/{bookId}',
		method: 'GET',
		handler: getBook
	},
	{
		path: '/books/{bookId}',
		method: 'PUT',
		handler: updateBook
	},
	{
		path: '/books/{bookId}',
		method: 'DELETE',
		handler: deleteBook
	}
];

export { routes };
