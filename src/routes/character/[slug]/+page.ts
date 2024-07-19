export async function load({ params }){
	const id:number = params.slug;
	const data=await fetch(`https://dragonball-api.com/api/characters/${id}`);
	return {
		title: `Dragon App - Character ${params.slug}`,
		ch: await data.json()
	}
}