<script lang="ts">
	export let name: string;
	export let caption: string;
	export let porcentage: number = 0;
</script>

<one-progress>
	<hgroup>
		<span class="body-medium">{name}</span>
		<span class="body-medium">{caption}</span>
	</hgroup>
	<one-progress-linear style:--width={`${porcentage}%`} />
</one-progress>

<style>
	one-progress {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	hgroup {
		display: flex;
		justify-content: space-between;
		gap: 24px;
	}
	one-progress-linear {
		width: 100%;
		height: 8px;
		background-color: var(--background-color);
		position: relative;
		border-radius: 4px;
	}
	one-progress-linear::before {
		content: '';
		border-radius: 4px;
		width: var(--width);
		height: 100%;
		background-color: var(--primary-color);
		position: absolute;
		top: 0px;
		left: 0px;
	}
</style>
