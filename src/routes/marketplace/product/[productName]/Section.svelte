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
			<Progress {name} porcentage={80} caption="4.0" />
		{/each}
	</div>
	<hr />
	<div class="content" id="comments" class:empty={product.comments.length === 0}>
		<span class="label-large">Comentarios</span>
		{#each product.comments as comment}
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
			<Comment {comment} />
		{:else}
			<div id="comment-empty">
				<span class="material-symbols-outlined">comment</span>
				<p class="body-medium">No hay comentarios</p>
			</div>
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
		display: grid;
		grid-template-rows: repeat(6, auto) 1fr;
		align-items: flex-start;
	}
	header {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px;
	}
	header h3 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
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
		height: 100%;
		align-content: flex-start;
	}

	#comments.empty {
		grid-template-rows: auto 1fr;
	}

	#comment-empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 100%;
		opacity: 0.6;
		padding: 32px;
		/* background-color: red; */
	}
	#comment-empty span {
		font-size: 56px;
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
