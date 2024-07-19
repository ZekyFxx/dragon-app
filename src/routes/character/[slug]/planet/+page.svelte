<script>
    import { onMount } from 'svelte';
	import Card from '../../../../components/card.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const ch = data.ch;
	const planet = data.planet;
	onMount(()=>{
		document.title=data.title;
	})
</script>

<a class="back" href="/character/{ch.id}">Go back</a>
<div class="ch">
<div class="card">
	<div class="card__header">
		<a class="card__header__link" href="/character/{ch.id}/planet">Planeta: {planet.name}</a>
		<i>Destruido: {planet.isDestroyed?'Si':'No'}</i>
		<div class="card__img">
			<img src="{planet.image}" alt="{planet.name}">
		</div>
	</div>

	<div class="card__content">
		<p>{planet.description}</p>
	</div>
	<div class="card__footer">

	</div>
</div>
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
	gap: 1rem;
}
.card__img{
	display: flex;
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
