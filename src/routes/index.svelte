<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
	import { } from 'os';
	import Accordion from "../components/Accordion.svelte";

	function toggle() {
		window.document.body.classList.toggle('dark')
	}
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
		display: grid;
		grid-gap: .5rem;
		margin: 10vh 0 0;
		width: 100%;
	}

	.contact-details {
		display: flex;
		flex-wrap: wrap;
	}

	.contact-details__item {

	}

	.contact-details__link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: .5rem;
	}

	.homepage__section {
		display: grid;
		grid-gap: 0.5rem;
	}
	
	.homepage__section-portfolio {
		grid-template-columns: repeat(auto-fit, minmax(min-content, calc(45ch - 1rem)));
		grid-gap: 2rem;
	}
	
	.homepage__section-contact-details {
	}
	
	.homepage__section-contact-details p {
		max-width: 45ch;
	}
	
	.homepage__section-quote {
		text-align: center;
	}

	.switcher {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.5rem;
		margin: auto auto auto 0;
		align-items: center;
	}

	.switch {
		border: 1px dashed indianred;
		cursor: pointer;
	}

	.switch span {
		font-size: 1.7rem;
		padding: .25rem .5rem;
	}

	.works-list {
		position: relative;
		grid-gap: 1rem;
	}

	.works-item {
		display: flex;
		padding: 0.25rem;
		z-index: 1;
	}

	.works-link {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 1rem;
		margin: -.5rem;
		padding: .5rem;
		width: 100%;
		text-decoration: none;
		color: var(--text);
		position: relative;
	}

	a.works-link::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--border);
		z-index: 1;
		opacity: var(--worksLinkBG, 0);
		border-radius: 0.25rem;
		pointer-events: none;
	}

	a.works-link:hover {
		--worksLinkBG: 0.25;
	}

	.works-link__text {
		display: grid;
		grid-gap: 0.5rem;
	}
	
	.works-link__cover {
		border: 1px dashed olive;
		font-size: 8px;
		padding: 2px;
		text-align: center;
		font-family: monospace;
		width: 4rem;
		height: 4rem;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.works-link h5 {
		margin: auto 0;
		font-size: .85rem;
		opacity: 0;
	}

	@media (max-width: 740px) {
		.works-link h5 {
			opacity: 1;
		}
	}

	.works-link h3,
	.works-link h5 {
		transition: opacity calc(var(--duration, .15s)/2) var(--bezier, cubic-bezier(.445, .05, .55, .95))
	}
/* 
	.works-link:focus h3,
	.works-link:hover h3 {
		color: var(--primary);
	} */
	
	.works-link:focus h5,
	.works-link:hover h5 {
		opacity: 1;
	}

	.accordions {
		display: grid;
		grid-gap: 1.5rem;
		margin: 0 auto auto 0;
	}

</style>

<svelte:head>
	<title>GLDT</title>
</svelte:head>



<div class="col">
	<header>
		<h1>Hola, I’m Gonzalo.</h1>
		<div class="switcher">
			<h2>I'm a </h2>
			<span class="switch" on:click={toggle}>
				<span>EN</span>
				<span>ES</span>
			</span>
			<h2>translator.</h2>
		</div>
	</header>
	<section class="homepage__section homepage__section-portfolio">
		<!-- <p>
			I have a BA in Technical-Scientific and Literay Translation in English, but I specialice in video-game localization.
		<br>
			I’ve worked freelance as an individual contributor and in managing positions, in an agile enviroment, for technical/scientific industries.
		<br>
			I'm also experienced as a generalist for different projects, like IT documentation, media & press, corporate videos subtitles, voiceovers, interviews and surveys.
		</p> -->
		<div class="accordions">
			<Accordion/>
		</div>
		<ul class="works-list">
			{#each posts as post}
				<li class="works-item">
					<a class="works-link" rel='prefetch' href='blog/{post.slug}'>
						<span class="works-link__cover">{post.cover}</span>
						<span class="works-link__text">
							<h3>{post.title}</h3>
							<h5>{post.description}</h5>
						</span>
					</a>
				</li>
			{/each}
			<li class="works-item">
				<p class="works-link">Please reach out for more</p>
			</li>
		</ul>
	</section>
	<section class="homepage__section homepage__section-contact-details">
		<p>
			I cordially invite you
			<a href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo" target="_top" class="link">
				get in touch
			</a>
			for any consultation and work inqueries.
		</p>
		<ul class="contact-details">
			<li class="contact-details__item">
				<a href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo" target="_top" class="contact-details__link link">
					<svg width="32px" height="32px">
						<rect width="32px" height="32px" fill="red"/>
					</svg>
					Email
				</a>
			</li>
			<li class="contact-details__item">
				<span class="contact-details__link">
					<svg width="32px" height="32px">
						<rect width="32px" height="32px" fill="red"/>
					</svg>
					+54 341 3157805
				</span>
			</li>
		</ul>
		<ul class="contact-details">
			<li class="contact-details__item">
				<a href="https://www.proz.com/profile/3044101" target="_blank" class="contact-details__link link">
					<svg width="32px" height="32px">
						<rect width="32px" height="32px" fill="red"/>
					</svg>
					ProZ
				</a>
			</li>
			<li class="contact-details__item">
				<a href="https://www.linkedin.com/in/gonzalo-luis-d%C3%ADaz-09ab70196/" target="_blank" class="contact-details__link link">
					<svg width="32px" height="32px">
						<rect width="32px" height="32px" fill="red"/>
					</svg>
					LinkedIn
				</a>
			</li>
			<li class="contact-details__item">
				<a href="cv_gld.pdf" target="_blank" class="contact-details__link link">
					<svg width="32px" height="32px">
						<rect width="32px" height="32px" fill="red"/>
					</svg>
					Resume
				</a>
			</li>
		</ul>
	</section>
	<section class="homepage__section homepage__section-quote">
		<em>"Hello quote"</em>
	</section>
</div>