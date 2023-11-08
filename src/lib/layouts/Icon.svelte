<script lang="ts">
	export let icon: string;
</script>

<button class="icon material-symbols-outlined" on:click>
	{icon}
</button>

<style>
	button.icon {
		width: 24px;
		height: 24px;
		border: none;
		background: none;
		color: var(--text-color);
	}
</style>
