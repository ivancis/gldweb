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
		grid-gap: 10vh;
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
		grid-gap: 2rem;
		margin: 1rem auto 1rem 0;
	}

	.contact-details__item {
		flex: 1 0 auto;
    	margin: -.5rem;
	}

	.contact-details__link {
		display: flex;
		align-items: center;
		padding: 0;
		gap: 0.5rem;
		padding: .5rem;
	}
	
	.contact-details__link--mega {
		font-size: 1.5rem;
		padding: 0;
	}
	
	.contact-details__link--mega:hover {
		text-decoration: underline;
	}

	.homepage__section {
		display: grid;
		grid-gap: 0.5rem;
	}
	
	.homepage__section-portfolio {
		grid-template-columns: repeat(auto-fit, minmax(min-content, calc(var(--colSize) / 2 - 1.5rem)));
		grid-gap: 3rem;
	}
	
	.homepage__section-contact-details {
		max-width: 50ch;
		grid-gap: 2rem;
	}
	
	.homepage__section-contact-details p {
		max-width: var(--colSize);
	}
	
	.homepage__section-quote p {
		text-align: center;
		font-size: 0.75rem;
		bottom: 0;
		left: 0;
		width: 100%;
		background: var(--border);
		padding: 1rem;
		opacity: 0.5;
		border-radius: 1rem;
	}

	.bio {
		display: grid;
		gap: 2rem;
		margin: auto auto auto 0;
		align-items: center;
		max-width: 60ch;
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
		grid-gap: 1.5rem;
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
		margin: auto 0;
	}
	
	.works-link__cover {
		font-size: 8px;
		padding: 2px;
		text-align: center;
		font-family: monospace;
		width: 6rem;
		height: 6rem;
		border-radius: 0.5rem;
		overflow: hidden;
		position: relative;
		border: 1px solid var(--border);
	}

	.works-link__cover img {
		width: 100%;
		object-fit: cover;
		filter: blur(1rem);
	}

	.works-link h5 {
		margin: auto 0;
		font-size: .85rem;
		/* opacity: 0; */
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
		<div class="bio">
			<h2>I'm a Gameloc Specialist.</h2>
			<h3>If you are looking for a passionate, committed, creative professional translator: you have found it!</h3>
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
			<h5 class="section-title">What I do:</h5>
			<Accordion/>
		</div>
		<ul class="works-list">
			<h5 class="section-title">Case studies:</h5>
			{#each posts as post}
				<li class="works-item">
					<a class="works-link" rel='prefetch' href='blog/{post.slug}'>
						<span class="works-link__cover">
							<img src={post.cover} alt={post.title} />
						</span>
						<span class="works-link__text">
							<h3>{post.title}</h3>
							<h5>{post.description}</h5>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section class="homepage__section homepage__section-contact-details">
		<h5 class="section-title">Get in touch:</h5>
		<a
			href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo"
			target="_blank"
			class="contact-details__link contact-details__link--mega link"
		>
			email@email.com
		</a>
		<a href="tel:+54 341 3157805" class="contact-details__link contact-details__link--mega link">
			<svg
				viewBox="0 0 24 24"
				width="16"
				height="16"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
			</svg>
			+54 341 3157805
		</a>
		<p>
			I'd absolutly love to share a chat for any consultation and work inqueries you may have.
		</p>
		<p>
			GMT-3 (Argentina)
		</p>
		<ul class="contact-details">
			<li class="contact-details__item">
				<a href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo" target="_blank" class="contact-details__link link">
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					Email
				</a>
			</li>
			<li class="contact-details__item">
				<a href="https://www.proz.com/profile/3044101" target="_blank" class="contact-details__link link">
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="22" y1="12" x2="18" y2="12"></line>
						<line x1="6" y1="12" x2="2" y2="12"></line>
						<line x1="12" y1="6" x2="12" y2="2"></line>
						<line x1="12" y1="22" x2="12" y2="18"></line>
					</svg>
					ProZ
				</a>
			</li>
			<li class="contact-details__item">
				<a href="https://www.linkedin.com/in/gonzalo-luis-d%C3%ADaz-09ab70196/" target="_blank" class="contact-details__link link">
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
					LinkedIn
				</a>
			</li>
			<li class="contact-details__item">
				<a href="cv_gdb.pdf" target="_blank" class="contact-details__link link">
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="16" y1="13" x2="8" y2="13"></line>
						<line x1="16" y1="17" x2="8" y2="17"></line>
						<polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Resume
				</a>
			</li>
		</ul>
	</section>
	<section class="homepage__section homepage__section-quote">
		<p>
			<em>“A strong man doesn’t need to read the future. He makes his own.”</em><br>
			— Solid Snake, ‘Metal Gear Solid’.
		</p>
	</section>
</div>