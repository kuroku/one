<div id="one-ui">
	<slot />
</div>
<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<meta name="theme-color" content="#eee" />
</svelte:head>

<style>
	@import '../styles/global.css';
	#one-ui {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: var(--background-color);
		display: grid;
		overflow: hidden;
	}

	@media screen and (orientation: landscape) {
		#one-ui {
			grid-template-columns: 80px 1fr;
			grid-template-rows: 64px 1fr;
		}
	}
	@media screen and (orientation: portrait) {
		#one-ui {
			grid-template-columns: auto 1fr;
			grid-template-rows: 64px 1fr auto;
		}
	}
</style>
