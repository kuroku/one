<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<picture>
	<img {src} {alt} loading="lazy" />
</picture>

<style>
	picture {
		/* width: 100%;
		height: 100%; */
		display: block;
		overflow: hidden;
		background-color: var(--background-100-color);
		border-radius: 16px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
</style>
