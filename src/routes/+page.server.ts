import type { PageLoad } from './$types';


export const load:PageLoad = async({ fetch, params }) => {
	const response = await fetch(`https://dragonball-api.com/api/characters`);
	const info = await response.json();

	return {
		items: info.items
	}
}