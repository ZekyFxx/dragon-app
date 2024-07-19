export const load = async({ params }) => {
	console.log(`URL PARAMS: `, params);
	const id = params.slug;
	const response = await fetch(`https://dragonball-api.com/api/characters/${params.slug}`)
	const data = await response.json();
	
	return {
		trans: data.transformations,
		ch: data,
		title: `Dragon App - ${data.name} Transformations`
	}
}