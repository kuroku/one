<figure>
	<img src="/wallpaper/1.jpg" alt="one" />
</figure>

<style>
	figure {
		overflow: hidden;
	}
	@media screen and (orientation: landscape) {
		figure {
			width: 100%;
			height: 100%;
		}

		figure img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 35% 100%);
		}
	}

	@media screen and (orientation: portrait) {
		figure {
			width: 100%;
			order: -1;
			margin-top: 64px;
		}

		figure img {
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 70%);
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}
	}
</style>
