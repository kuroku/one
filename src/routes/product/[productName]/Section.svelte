<script lang="ts">
	import Progress from '$lib/layouts/Progress.svelte';
	import Avatar from '$lib/layouts/Avatar.svelte';
	import Comment from './Comment.svelte';
	import type { PageData } from './$types';
	export let product: PageData['product'];
	export let ratings: PageData['ratings'];
</script>

<section>
	<header>
		<Avatar src={product.brand.image} alt={product.name} />
		<h3 class="title-medium">{product.name}</h3>
	</header>
	<hr />
	<div class="content" id="description">
		<span class="label-large">Descripcion</span>
		<p class="body-medium">{product.description}</p>
	</div>
	<hr />
	<div class="content" id="rate">
		<span class="label-large">Calificacion</span>
		{#each ratings as { name }}
			<Progress {name} porcentage={100} caption="5.0" />
		{/each}
	</div>
	<hr />
	<div class="content" id="comments">
		<span class="label-large">Comentarios</span>
		{#each product.comments as comment}
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
		{/each}
	</div>
</section>

<style>
	section {
		grid-column: span 2;
		width: 100%;
		height: 100%;
		background-color: var(--surface-color);
		border-radius: 16px;
		flex-shrink: 0;
	}
	header {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px;
	}
	.content {
		padding: 16px;
		display: grid;
		gap: 8px;
	}
	#rate {
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	#rate span {
		grid-column: 1/3;
	}
	#comments {
		/* grid-template-columns: 1fr; */
		gap: 8px;
	}

	@media screen and (orientation: landscape) {
		section {
			overflow: auto;
		}
	}

	@media not (hover: none) {
		header,
		.content {
			padding-right: 8px;
		}

		section::-webkit-scrollbar-button {
			height: 80px;
		}
	}
</style>
