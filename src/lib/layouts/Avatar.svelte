<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} />

<style>
	img {
		border-radius: 50%;
		height: var(--size, 36px);
		width: var(--size, 36px);
	}
</style>
