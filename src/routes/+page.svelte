<script>
	import Logo from '$lib/layouts/Logo.svelte';
	import Wallpaper from '$lib/layouts/Wallpaper.svelte';
	import Button from '$lib/layouts/Button.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import Main from '$lib/layouts/Main.svelte';
	import Toolbar from '$lib/layouts/Toolbar.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<Header --background-color="transparent">
	<Logo />
	<Toolbar>
		<Button>Comenzar</Button>
	</Toolbar>
</Header>

<Main id="home" --padding="0px">
	<section>
		<hgroup>
			<span class="title-large mobile_title-medium">Trabajemos juntos</span>
			<h1 class="display-large mobile_display-small">
				Marca un impacto en tu negocio y haz que <b>CREZCA</b>
			</h1>
			<p class="body-large mobile_body-medium">
				Somo especialista en soluciones tecnologias la cuales te ofrece la mejor solucion para tu
				marca
			</p>
		</hgroup>
	</section>
	<Wallpaper />
</Main>

<style>
	:global(#home) {
		display: grid;
	}
	section {
		display: grid;
	}

	hgroup span {
		margin-bottom: 8px;
	}
	hgroup h1 {
		margin-bottom: 24px;
	}
	h1 b {
		background-color: var(--primary-color);
		color: var(--primary-on-color);
		border-radius: 8px;
		padding: 0px 4px;
	}

	@media screen and (orientation: landscape) {
		:global(#home) {
			grid-template-columns: 35% 1fr;
			/* gap: 24px; */
		}
		section {
			width: 100%;
			height: 100%;
			padding: 16px;
		}
		hgroup {
			margin-top: auto;
			padding-bottom: 32px;
		}
	}

	@media screen and (orientation: portrait) {
		:global(#home) {
			grid-template-rows: 1fr auto;
		}
		section {
			width: 100%;
			padding: 0px 16px 32px 16px;
			margin-top: -32px;
		}
	}
</style>
