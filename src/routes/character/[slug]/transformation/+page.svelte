<script lang="ts">
    import { onMount } from 'svelte';
	import Card from '../../../../components/card.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const ch = data.ch;
	const slug = data.slug;
	const transformations = data.trans;
	console.log(transformations)
	onMount(()=>{
		document.title=data.title;
	})
</script>

<a class="back" href="/character/{ch.id}">Go back</a>
<div class="ch">
{#each transformations as transformation, index}
	<div class="card" id="{index}">
		<div class="card__header">
			<a class="card__header__link" href="/character/{ch.id}/transformation/{transformation.id}">Transformación: {transformation.name}</a>
			<p>Ki: {transformation.ki}</p>
			<div class="card__img">
				<img src="{transformation.image}" alt="{transformation.name}">
			</div>
		</div>

		<div class="card__content">
			
		</div>
		<div class="card__footer">

		</div>
	</div>
{/each}
</div>

<style>
:global(body){
	color: #eee;
	text-align: center;
}
:global(a){
	text-decoration: none;
}
a{
	font-size: 2rem;
	color: #808080;
}
.ch{
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
}
.back{
	font-size: 2rem;
}
.card{
	width: 100%;
	margin: 1rem 0;
	padding: 1rem;
	background: #202020;
	color: #eee;
	box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.3);
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}
.card__img{
	display: flex;
	justify-content: center;
	align-items: center;
}
.card__img img{
	margin: 1rem 0;
	width: 300px;
	border-radius: 20px;
}
.card__header{
	margin: 1rem 0;
	text-align: center;
}
.card__header__link{
	display: block;
	margin: 1rem 0;
	font-size: 2rem;
	text-decoration: none;
	color: #eee;
}
.card__content{
	display: flex;
	align-items: center;
	margin: 1rem 0;
}
.card__content > p{
	max-width: 400px;
	color: #cccccc;
	font-family: sans-serif;
}
.card__footer{
	margin: 1rem 0;
}
.card__footer > span{
	margin: 1rem 0;
	display: block;
}
@media (width > 600px){
	.card{
		width: 700px;
	}
}
</style>
