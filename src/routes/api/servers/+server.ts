import { json } from '@sveltejs/kit';
import { Server } from '@fabricio-191/valve-server-query'
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async () => {
	const server = await Server({
		ip: '45.235.99.105',
		port: 27034
	});

	const svInfo = await server.getInfo();

	return json({ 
		name: svInfo.name, 
		map: svInfo.map, 
		connect: svInfo.address 
	});
};
