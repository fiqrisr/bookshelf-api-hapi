import { Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';
import { nanoid } from 'nanoid';

import { Book, BookPayload } from './types';
import { books } from './books';
import { newResponse } from './helpers/response';

const addBook = (
	request: Request,
	h: ResponseToolkit
): ServerRoute['handler'] => {
	const {
		name,
		year,
		author,
		publisher,
		summary,
		pageCount,
		reading,
		readPage
	} = <BookPayload>request.payload;

	if (name === undefined) {
		return h
			.response(
				newResponse({
					status: 'fail',
					message: 'Gagal menambahkan buku. Mohon isi nama buku'
				})
			)
			.code(400);
	}

	if (readPage >= pageCount) {
		return h
			.response(
				newResponse({
					status: 'fail',
					message:
						'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
				})
			)
			.code(400);
	}

	const id = nanoid(16);
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;

	const newBook: Book = {
		id,
		name,
		year,
		author,
		publisher,
		summary,
		pageCount,
		reading,
		readPage,
		finished: pageCount === readPage,
		insertedAt,
		updatedAt
	};

	books.push(newBook);

	const isSuccess = books.filter(book => book.id === id).length > 0;

	if (isSuccess) {
		return h
			.response(
				newResponse({
					status: 'success',
					message: 'Buku berhasil ditambahkan',
					data: {
						bookId: id
					}
				})
			)
			.code(201);
	}

	return h
		.response(
			newResponse({
				status: 'error',
				message: 'Buku gagal ditambahkan'
			})
		)
		.code(500);
};

const getBooks = (_: Request, h: ResponseToolkit): ServerRoute['handler'] => {
	const booksRes = books.map(book => {
		return {
			id: book.id,
			name: book.name,
			publisher: book.publisher
		};
	});

	return h.response(
		newResponse({
			status: 'success',
			data: {
				books: booksRes
			}
		})
	);
};

export { addBook, getBooks };
