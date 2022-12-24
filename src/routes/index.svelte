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
		grid-gap: 5vh;
		margin: 0 auto auto;
		width: 100%;
		max-width: var(--colSize);
	}

	header {
		display: grid;
		grid-gap: .5rem;
		padding: 7.5vh 2rem 10vh;
		width: 100%;
		background-color: var(--accentD);
		border-radius: 1rem;
	}

	.contact {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 2rem;
		margin: 1rem auto 1rem 0;
	}

	.contact__item {
		flex: 0 0 auto;
    margin: -.5rem;
	}

	.contact__link {
		display: flex;
		align-items: center;
		padding: 0;
		gap: 0.5rem;
		padding: .5rem;
	}
	
	.contact__link--mega {
		padding: 0;
	}
	
	.contact__link--mega:hover {
		text-decoration: underline;
	}

	.homepage__section {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-gap: 0.5rem;
		min-height: 30vh;
		padding: 5vh 0;
	}
	
	.homepage__section--portfolio {
	}
	
	.homepage__section--contact {
		background: var(--bgInverted);
		grid-gap: 2rem;
		padding: 2rem;
		border-radius: 1rem;
		background: var(--bgLight);
		border-radius: 1rem;
	}
	
	.homepage__section--quote {
		text-align: center;
	}

	.homepage__section--quote p {
		margin: 0 auto;
		width: 100%;
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
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto auto 0;
	}

</style>

<svelte:head>
	<title>GDB Translations</title>
</svelte:head>



<header>
	<div class="col">
		<h1>Hola, I’m Gonzalo.</h1>
		<div class="bio col">
			<h2>I'm a Gameloc Specialist.</h2>
			<h3>If you are looking for a passionate, committed, creative professional translator... you have found it!</h3>
		</div>
	</div>
</header>
<div class="col">
	<section class="homepage__section homepage__section--portfolio">
		<!-- <p>
			I have a BA in Technical-Scientific and Literay Translation in English, but I specialice in video-game localization.
		<br>
			I’ve worked freelance as an individual contributor and in managing positions, in an agile enviroment, for technical/scientific industries.
		<br>
			I'm also experienced as a generalist for different projects, like IT documentation, media & press, corporate videos subtitles, voiceovers, interviews and surveys.
		</p> -->
		<!-- <ul class="works-list">
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
		</ul> -->
		<h5 class="section-title">What I do:</h5>
		<div class="accordions">
			<Accordion/>
		</div>
	</section>
</div>
<div class="col">
	<section class="homepage__section homepage__section--contact">
		<h5 class="section-title">Get in touch:</h5>
		<p>
			Start your next localization project now!
			<br>
			PST and CET Time Zones. Based in Argentina.
		</p>
		<a
			href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo"
			target="_blank"
			class="contact__link contact__link--mega link"
		>
			<h4>diazgonzaloluis@gmail.com</h4>
		</a>
		<!-- <a href="tel:+54 341 3157805" class="contact__link contact__link--mega link">
			<h4>
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">

					</path>
				</svg>
				+54 341 3157805
			</h4>
		</a> -->
		<ul class="contact">
			<li class="contact__item">
				<a href="" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					Skype
				</a>
			</li>
			<li class="contact__item">
				<a href="" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
					<path
						d="M18.9493 5.29687C17.6544 4.69102 16.2698 4.25071 14.8223 4C14.6445 4.32141 14.4369 4.75371 14.2936 5.09759C12.7549 4.86619 11.2303 4.86619 9.71985 5.09759C9.5767 4.75371 9.36428 4.32141 9.18487 4C7.73583 4.25071 6.34966 4.69264 5.05477 5.30008C2.44295 9.24686 1.73493 13.0956 2.08895 16.8898C3.82123 18.1834 5.50004 18.9692 7.15051 19.4835C7.55801 18.9226 7.92143 18.3264 8.23455 17.698C7.63825 17.4715 7.06711 17.1919 6.52746 16.8673C6.67063 16.7612 6.81067 16.6503 6.94596 16.5362C10.2375 18.0757 13.8138 18.0757 17.0659 16.5362C17.2028 16.6503 17.3429 16.7612 17.4845 16.8673C16.9432 17.1934 16.3705 17.4731 15.7742 17.6997C16.0873 18.3264 16.4492 18.9242 16.8583 19.485C18.5103 18.9708 20.1907 18.185 21.923 16.8898C22.3384 12.4914 21.2134 8.678 18.9493 5.29687ZM8.68296 13.6C7.69488 13.6 6.8846 12.6776 6.8846 11.5543C6.8846 10.431 7.67757 9.50693 8.68296 9.50693C9.68841 9.50693 10.4986 10.4294 10.4814 11.5543C10.4829 12.6776 9.68841 13.6 8.68296 13.6ZM15.329 13.6C14.3408 13.6 13.5305 12.6776 13.5305 11.5543C13.5305 10.431 14.3235 9.50693 15.329 9.50693C16.3343 9.50693 17.1446 10.4294 17.1273 11.5543C17.1273 12.6776 16.3343 13.6 15.329 13.6Z"
					/>
					</svg>						
					Discord
				</a>
			</li>
			<li class="contact__item">
				<a href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
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
			<li class="contact__item">
				<a href="https://www.proz.com/profile/3044101" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
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
			<li class="contact__item">
				<a href="https://www.linkedin.com/in/gonzalo-luis-d%C3%ADaz-09ab70196/" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
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
			<li class="contact__item">
				<a href="cv_gdb.pdf" target="_blank" class="contact__link link">
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="20" y1="13" x2="8" y2="13"></line>
						<line x1="20" y1="17" x2="8" y2="17"></line>
						<polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Resume
				</a>
			</li>
		</ul>
	</section>
</div>
<section class="homepage__section homepage__section--quote">
	<p>
		<em>“We all make choices in life, but in the end our choices make us.”</em><br>
		— Andrew Ryan, ‘Bioshock’.
	</p>
</section>
<span class="particles particles--first">
	<svg viewBox="0 0 1000 1000" height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
		<circle class="cls-1" cx="945.5" cy="37.5" r="1.5"/>
		<circle class="cls-1" cx="260.5" cy="596.5" r="1"/>
		<circle class="cls-1" cx="429" cy="804" r="1"/>
		<circle class="cls-1" cx="591" cy="963" r="1"/>
		<circle class="cls-1" cx="129" cy="783" r="1"/>
		<circle class="cls-1" cx="337" cy="310" r="1"/>
		<circle class="cls-1" cx="440" cy="345" r="1"/>
		<circle class="cls-1" cx="742" cy="429" r="1"/>
		<circle class="cls-1" cx="140.5" cy="291.5" r="1.5"/>
		<circle class="cls-1" cx="335.5" cy="37.5" r="1.5"/>
		<circle class="cls-1" cx="660.5" cy="115.5" r="1.5"/>
		<circle class="cls-1" cx="461.5" cy="326.5" r="1.5"/>
		<circle class="cls-1" cx="647.5" cy="670.5" r="1.5"/>
		<circle class="cls-1" cx="140.5" cy="930.5" r="1.5"/>
		<circle class="cls-1" cx="798.5" cy="404.5" r="1.5"/>
		<circle class="cls-1" cx="557" cy="294" r="1.5"/>
		<circle class="cls-1" cx="53.5" cy="93.5" r="1.5"/>
		<circle class="cls-1" cx="407" cy="232" r="1"/>
		<circle class="cls-1" cx="679" cy="174" r="1"/>
		<circle class="cls-1" cx="220.5" cy="100.5" r="1"/>
		<circle class="cls-1" cx="693.5" cy="308.5" r="1"/>
		<circle class="cls-1" cx="650.5" cy="419.5" r="1"/>
		<circle class="cls-1" cx="915" cy="817" r="1"/>
		<circle class="cls-1" cx="249" cy="749" r="1"/>
		<circle class="cls-1" cx="712" cy="112" r="1.5"/>
		<circle class="cls-1" cx="819" cy="296" r="1.5"/>
		<circle class="cls-1" cx="890" cy="573" r="1.5"/>
		<circle class="cls-1" cx="965.5" cy="950.5" r="1.5"/>
		<circle class="cls-1" cx="677" cy="433" r="1.5"/>
		<circle class="cls-1" cx="333" cy="619" r="1.5"/>
		<circle class="cls-1" cx="250.5" cy="563.5" r="1.5"/>
		<circle class="cls-1" cx="34.5" cy="649.5" r="1.5"/>
		<circle class="cls-1" cx="599" cy="770" r="1.5"/>
		<circle class="cls-1" cx="651.5" cy="531.5" r="2.5"/>
	</svg>
</span>
<span class="particles">
	<svg viewBox="0 0 1000 1000" height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
		<circle class="cls-1" cx="945.5" cy="37.5" r="1.5"/>
		<circle class="cls-1" cx="260.5" cy="596.5" r="1"/>
		<circle class="cls-1" cx="429" cy="804" r="1"/>
		<circle class="cls-1" cx="591" cy="963" r="1"/>
		<circle class="cls-1" cx="129" cy="783" r="1"/>
		<circle class="cls-1" cx="337" cy="310" r="1"/>
		<circle class="cls-1" cx="440" cy="345" r="1"/>
		<circle class="cls-1" cx="742" cy="429" r="1"/>
		<circle class="cls-1" cx="140.5" cy="291.5" r="1.5"/>
		<circle class="cls-1" cx="335.5" cy="37.5" r="1.5"/>
		<circle class="cls-1" cx="660.5" cy="115.5" r="1.5"/>
		<circle class="cls-1" cx="461.5" cy="326.5" r="1.5"/>
		<circle class="cls-1" cx="647.5" cy="670.5" r="1.5"/>
		<circle class="cls-1" cx="140.5" cy="930.5" r="1.5"/>
		<circle class="cls-1" cx="798.5" cy="404.5" r="1.5"/>
		<circle class="cls-1" cx="557" cy="294" r="1.5"/>
		<circle class="cls-1" cx="53.5" cy="93.5" r="1.5"/>
		<circle class="cls-1" cx="407" cy="232" r="1"/>
		<circle class="cls-1" cx="679" cy="174" r="1"/>
		<circle class="cls-1" cx="220.5" cy="100.5" r="1"/>
		<circle class="cls-1" cx="693.5" cy="308.5" r="1"/>
		<circle class="cls-1" cx="650.5" cy="419.5" r="1"/>
		<circle class="cls-1" cx="915" cy="817" r="1"/>
		<circle class="cls-1" cx="249" cy="749" r="1"/>
		<circle class="cls-1" cx="712" cy="112" r="1.5"/>
		<circle class="cls-1" cx="819" cy="296" r="1.5"/>
		<circle class="cls-1" cx="890" cy="573" r="1.5"/>
		<circle class="cls-1" cx="965.5" cy="950.5" r="1.5"/>
		<circle class="cls-1" cx="677" cy="433" r="1.5"/>
		<circle class="cls-1" cx="333" cy="619" r="1.5"/>
		<circle class="cls-1" cx="250.5" cy="563.5" r="1.5"/>
		<circle class="cls-1" cx="34.5" cy="649.5" r="1.5"/>
		<circle class="cls-1" cx="599" cy="770" r="1.5"/>
		<circle class="cls-1" cx="651.5" cy="531.5" r="2.5"/>
	</svg>
</span>