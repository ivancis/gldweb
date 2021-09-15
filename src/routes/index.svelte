<script>
	import successkid from 'images/successkid.jpg';
</script>

<style>
	.col {
		display: grid;
		grid-gap: 3rem;
		margin: 0 auto auto;
		width: 100%;
		max-width: var(--colSize);
	}

	header {
		display: flex;
		justify-content: space-between;
		grid-gap: .5rem;
		padding: 0 1rem;
		margin: 10vh 0 0;
		width: 100%;
		transition: opacity .2s cubic-bezier(.445, .05, .55, .95);
	}

	.header__title {
		display: grid;
		gap: 1rem;
		max-width: 70ch;
	}

	.header__links {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 1.5rem;
	}

	.header__links-item {
		margin: 0.5rem -0.5rem;
	}

	.header__links-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: .5rem;
	}

</style>

<svelte:head>
	<title>GLDT</title>
</svelte:head>



<div class="col">
	<header>
		<div class="header__title">
			<h2>Hola, I’m Gonzalo.</h2>
			<p>
				Professional english > spanish translator
			<br>
				Specialiced in video games localization & multimedia.
			<br>
				BA in Technical-Scientific and Literay Translation in English.
			</p>
			<p>
				I’ve worked for agencies as an individual contributor and in managing positions, for mostly technical/scientific fields but also as a generalist:
				IT documentation, media, corporate videos cinema subtitles. Interviews and surveys.
			</p>
			<ul class="header__links">
				<li class="header__links-item">
					<a href="cv_gld.pdf" target="_blank" class="header__links-link link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						Resume
					</a>
				</li>
				<li class="header__links-item">
					<a href="https://www.proz.com/profile/3044101" target="_blank" class="header__links-link link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						ProZ
					</a>
				</li>
				<li class="header__links-item">
					<a href="https://www.linkedin.com/in/gonzalo-luis-d%C3%ADaz-09ab70196/" target="_blank" class="header__links-link link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						LinkedIn
					</a>
				</li>
			</ul>
			<ul class="header__links">
				<li class="header__links-item">
					<a href="mailto:diazivanluis@gmail.com?Subject=Hello%20Ivan" target="_top" class="header__links-link link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						Email
					</a>
				</li>
				<li class="header__links-item">
					<span class="header__links-link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						+54 341 3157805
					</span>
				</li>
			</ul>
			<ul class="header__links">
				<li class="header__links-item">
					<span class="header__links-link">
						<img style="background: orangered" src="../triangle-left.svg" alt="">
						Timezone: GMT-3
					</span>
				</li>
			</ul>
		</div>
	</header>
</div>