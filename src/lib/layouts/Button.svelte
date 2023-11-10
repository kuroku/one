<script lang="ts">
	export let color: 'primary' | 'green' = 'primary';
	export let icon: string | undefined = undefined;
	export let disabled: boolean = false;
</script>

<button class="label-large {color}" class:icon on:click {disabled}>
	{#if icon}
		<span class="material-symbols-outlined">{icon}</span>
	{/if}
	<slot />
</button>

<style>
	button {
		padding: 10px 16px;
		border-radius: 20px;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	[disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}
	.primary {
		background-color: var(--primary-color);
		color: var(--primary-on-color);
	}
	.icon {
		padding: 10px 24px 10px 16px;
		gap: 8px;
	}
	span {
		font-size: 18px;
	}
</style>
