<script context="module" lang="ts">
	export interface NavItem {
		title: string;
		icon: string;
		href: string;
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	export let nav: NavItem[];
</script>

<nav>
	{#each nav as { title, icon, href }}
		{@const isFocus = $page.url.pathname === href}
		<a {href}>
			<span class="material-symbols-outlined icon" class:focus={isFocus}>{icon}</span>
			<p class="label-medium">{title}</p>
		</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		background-color: var(--background-color);
		transition: bottom 180ms ease-out;
		z-index: 2;
	}
	a {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 56px;
		color: var(--text-color);
		text-decoration: none;
		gap: 4px;
	}
	.icon {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
		padding: 4px 16px;
		border-radius: 16px;
		transition: 180ms ease;
	}

	.icon.focus {
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
		background-color: var(--primary-color);
		color: var(--primary-on-color);
	}

	@media screen and (orientation: landscape) {
		nav {
			flex-direction: column;
			padding: 20px 0;
			gap: 20px;
			overflow: auto;
			grid-column: 1/2;
			grid-row: 3/4;
		}
	}

	@media screen and (orientation: portrait) {
		nav {
			width: 100%;
			flex-direction: row;
			height: 72px;
			grid-column: 1/3;
			grid-row: 3/4;
		}
		a {
			height: 100%;
		}
	}
</style>
