export const load = async({ params }) =>{
	const id:number = params.slug;
	const response=await fetch(`https://dragonball-api.com/api/characters/${id}`);
	const data = await response.json()
	return {
		title: `Dragon App - Character ${params.slug}`,
		planet: await data.originPlanet,
		ch: data
	}
}