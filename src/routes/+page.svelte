<script lang="ts">
	import Card from '../components/card.svelte';
	import { onMount } from 'svelte';

	let info;
	let search:String;

	onMount(()=>{
		document.title='Dragon App';
	})

	const getSearch = async()=>{
		if(search.length==0){
			const response = await fetch(`https://dragonball-api.com/api/characters`)
			info = await response.json();
			data.items = info.items;
		}
		else{
			const response = await fetch(`https://dragonball-api.com/api/characters?name=${search}`)
			data.items = await response.json();
		}
	}
	import type { PageData } from './$types';
	export let data:PageData;
</script>

<header>
	<h1>Dragon App</h1>
	<form on:submit|preventDefault={getSearch}>
		<input bind:value={search} on:input={getSearch} type="text" placeholder="Buscar un personaje">
		<!-- <button type="submit">Buscar</button> -->
	</form>
</header>
{#if data.items.length}
<div class="cards">

	{#each data.items as item}
	<Card id={item.id} title="{item.name}" img="{item.image}" content="{item.description}" footer="{item.race}"/>	
	{/each}	

</div>
{:else}
<div class="error">{search} name was not found.</div>
{/if}



<style>
:global(body){
	background: #303030;
	text-align: center;
}
.error{
	width: fit-content;
	margin: auto;
	font-family: sans-serif;
	font-size: 1.5rem;
	color: #c1c1c1;
	background: #101010;
	padding: 1rem;
	border-radius: 20px;
}
header{
	text-align: center;
	color: #eee;
	font-family: sans-serif;
	width: 100%;
	margin: auto;
}
.cards{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: center;
}
form{
	width: 100%;
}
input{
	margin: 1rem;
	width: 50%;
	padding: 1rem 1rem;
	border-radius: 18px;
	border: 1px solid #505050;
	outline: none;
}
/*button{
	display: inline-block;
	padding: .5rem 2rem;
	width: 200px;
	background: #303030;
	cursor: pointer;
	border-radius: 20px;
	border: 1px solid transparent;
}
*/
@media (width > 600px) {
	form{
		width: 100%;
	}

}
</style>