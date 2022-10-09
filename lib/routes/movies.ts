import { Router } from 'express';

export const movies = Router();

movies.post('/', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

movies.get('', async (req, res, next) => {
	try {
		res.json({
			name: 'Dangal',
		});
	} catch (e) {
		next(e);
	}
});

movies.get('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

movies.put('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
