<script lang="ts">
export let id:number;
export let title:string;
export let img:string;
export let content:String;
export let footer:String;
</script>

<div class="card">
	<div class="card__header">
		<a class="card__header__link" href="/character/{id}">{title}</a>
		<div class="card__img">
			<img src="{img}" alt="{title}">
		</div>
	</div>

	<div class="card__content">
		<p>{content}</p>
	</div>
	<div class="card__footer">
		{footer} 
	</div>
</div>


<style>
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
	transition: all 0.3s ease;
}
.card:hover{
	transform: scale(1.05);
}
.card__img{
	display: flex;
	align-items: center;
}
.card__img > img{
	aspect-ratio: 3/7;
	width: 100px;
	transition: all 0.3s ease;
}
.card__img > img:hover{
	transform: scale(1.1);
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
	color: #cccccc;
	font-family: sans-serif;
}
.card__footer{
	margin: 1rem 0;
}

@media (width > 600px){
	.card{
		width: 500px;
	}
}
</style>