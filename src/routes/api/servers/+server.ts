import { json } from '@sveltejs/kit';
import Gamedig from 'gamedig';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async () => {
	let result = await Gamedig.query({
		type: 'tf2',
		host: '45.235.99.105',
		port: 27034
	});

	return json({ 
		name: result.name, 
		map: result.map, 
		connect: result.connect 
	});
};
