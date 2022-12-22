<script>
	import { slide } from 'svelte/transition';
	let visible = true;
	let sections = [
		{
			id: 1,
			gaming: true,
			class: "gaming",
			title: "Translation and localization",
			content: "Translating and localizing user interface elements, dialogues, scripts, websites, marketing texts,  game guides, patch notes, subtitles, esports articles, and more.",
			active: true,
		},
		{
			id: 2,
			users: true,
			class: "users",
			title: "Consultancy",
			content: "Helping you internationalize your video game to ensure a flawless localization. Not sure what languages to localize you game into? I can help with that, too!",
			active: false,
		},
		{
			id: 3,
			planet: true,
			class: "planet",
			title: "SEO and ASO",
			content: "Choosing the perfect words to improve your ranking on game stores and search engines.",
			active: false,
		},
		{
			id: 4,
			checkright: true,
			class: "checkright",
			title: "Testing/LQA",
			content: "Finding context mistakes, truncated text, and grammar errors by playing the game. Don’t become the next localization meme!",
			active: false,
		},
		{
			id: 5,
			literacy: true,
			class: "literacy",
			title: "Glossary creation",
			content: "Crafting customized glossaries and translation memories to ensure a consistent localization.",
			active: false,
		},
		// {
		// 	id: 1,
		// 	gaming: true,
		// 	class: "gaming",
		// 	title: "Gaming localization",
		// 	content: "Internationalization for target audiences in culture, region, and language. JSON file edit for software termbase, specific game terminology. Styleguides, internal/external lexicon, tone of voice definition and documentation.",
		// 	active: false,
		// },
		// {
		// 	id: 2,
		// 	literacy: true,
		// 	class: "literacy",
		// 	title: "Storytelling",
		// 	content: "Well seasoned in a range of projects: IT documentation, user interviews, surveys audit, media & press, corporate videos subtitles, some voiceovers.",
		// 	active: false,
		// },
		// {
		// 	id: 3,
		// 	compass: true,
		// 	class: "compass",
		// 	title: "Collaboration",
		// 	content: "Systemic thinker with an agile aproach, experienced in cross-functional teams. Native facilitator, knowledge sharing, mentorship. ISTP-A personality.",
		// 	active: false,
		// },
		// {
		// 	id: 4,
		// 	duck: true,
		// 	class: "duck",
		// 	title: "Rubberduck",
		// 	content: "Mission mindset, business-driver KPI, task prioritization, constraint management. Experienced definig and managing acceptance criteria.",
		// 	active: false,
		// }
	]
	const expand = (section) => {
		sections = sections.map(s => {
			s.active = false
			if (s.id === section.id) {
				s.active = true
			}
			return s
		})
	}
</script>

<style>

	.accordion__item {
		padding: 0 2rem 2rem 0;
		max-width: calc(var(--colSize) / 1);
		width: 100%;
	}
	
	.accordion__item:nth-child(1) {
		padding-right: 0;
	}

	.accordion__trigger {
		display: grid;
		grid-gap: 1em;
		grid-template-columns: auto 1fr;
		padding: .5em;
		cursor: pointer;
		position: relative;
		transform-origin: 50%;
	}
	.accordion__trigger:hover {
		color: var(--primary);
	}

	.accordion__item--gaming .accordion-icon[data-active="true"]  {
		color: var(--accentA);
		color: var(--primary);
	}
	.accordion__item--gaming {
		--accordionContentBorder: 1px solid var(--accentA);
		--accordionContentBorder: 1px solid var(--primary);
	}
	
	.accordion__item--literacy .accordion-icon[data-active="true"]  {
		color: var(--accentB);
		color: var(--primary);
	}
	.accordion__item--literacy {
		--accordionContentBorder: 1px solid var(--accentB);
		--accordionContentBorder: 1px solid var(--primary);
	}
	
	.accordion__item--compass .accordion-icon[data-active="true"]  {
		color: var(--accentC);
		color: var(--primary);
	}
	.accordion__item--compass {
		--accordionContentBorder: 1px solid var(--accentC);
		--accordionContentBorder: 1px solid var(--primary);
	}
	
	.accordion__item--duck .accordion-icon[data-active="true"]  {
		color: var(--accentD);
		color: var(--primary);
	}
	.accordion__item--duck {
		--accordionContentBorder: 1px solid var(--accentD);
		--accordionContentBorder: 1px solid var(--primary);
	}

	.accordion-icon {
		display: flex;
		margin: auto;
	}

	.accordion-icon svg {
		width: 32px;
		height: 32px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1px;
		stroke-linecap: round;
		stroke-linejoin: bevel;
	}

	.accordion-title {
		margin: auto 0;
	}

	.accordion-content {
		padding: 0 0 1rem;
    margin: 0 auto 1rem 1.5rem;
	}

	.svg-literacy__page {
		/* stroke: blue; */
		stroke-linecap: butt;
	}

	.svg-code__chevron-left {
		transform: translateX(4px)
	}
	.svg-code__chevron-left, .svg-code__chevron-right {
		transition: transform calc(var(--duration, .15s)/2) var(--bezier, cubic-bezier(.445, .05, .55, .95));
	}
	.svg-code__chevron-right {
		transform: translateX(-4px)
	}
	.svg-code__character {
		opacity: 0
	}
	.svg-compass__needle {
		transform: rotate(-12deg);
		transform-origin: 50%
	}
	.accordion__item[data-active="true"] .svg-layout__vertical {
		animation: 1.3s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite both layout-vertical
	}
	.accordion__item[data-active="true"] .svg-layout__horizontal {
		animation: 1.5s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite both layout-horizontal
	}
	
	.accordion__item[data-active="true"] .svg-code__chevron-left, .accordion__item[data-active="true"] .svg-code__chevron-right {
		transform: none
	}
	.accordion__item[data-active="true"] .svg-code__character {
		animation: steady-blink 1s step-end infinite both
	}
	.accordion__item[data-active="true"] .svg-duck {
		animation: rock-duck 1s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite;
		transform-origin: 50%
	}
	.accordion__item[data-active="true"] .svg-duck__eye {
		animation: blink 1s infinite both
	}
	.accordion__item[data-active="true"] .svg-compass__needle {
		animation: waggle 1s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite;
		transform-origin: 50%
	}
	.accordion__item[data-active="true"] .svg-gaming {
		animation: 1.3s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite both shake-bottom;
	}
	
	.accordion__item[data-active="true"] .svg-literacy__page {
		animation: 1.4s var(--bezier, cubic-bezier(.445, .05, .55, .95)) infinite both bookPage;
	}

	@keyframes bookPage {
		0% {
			transform: translateX(0px);
			opacity: 0;
		}
		50% {
			transform: translateX(0px);
			opacity: 1;
		}
		100% {
			transform: translateX(-20px);
		}
	}

	@keyframes shake-bottom {
		0%,
		100% {
			-webkit-transform: rotate(0deg);
					transform: rotate(0deg);
			-webkit-transform-origin: 50% 100%;
					transform-origin: 50% 100%;
		}
		10% {
			-webkit-transform: rotate(2deg);
					transform: rotate(2deg);
		}
		20%,
		40%,
		60% {
			-webkit-transform: rotate(-4deg);
					transform: rotate(-4deg);
		}
		30%,
		50%,
		70% {
			-webkit-transform: rotate(4deg);
					transform: rotate(4deg);
		}
		80% {
			-webkit-transform: rotate(-2deg);
					transform: rotate(-2deg);
		}
		90% {
			-webkit-transform: rotate(2deg);
					transform: rotate(2deg);
		}
	}

	@keyframes rock-duck {
		50% {
			transform: rotate(-5deg) translateY(-2px)
		}
	}
	@keyframes layout-vertical {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
		20% {
			-webkit-transform: translateX(6px);
			transform: translateX(6px)
		}
		80% {
			-webkit-transform: translateX(6px);
			transform: translateX(6px)
		}
		to {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}
	@keyframes layout-horizontal {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
		20% {
			-webkit-transform: translateY(6px);
			transform: translateY(6px)
		}
		80% {
			-webkit-transform: translateY(6px);
			transform: translateY(6px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}

	@keyframes user-cross {
		0% {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
		20% {
			opacity: 0;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
		60% {
			opacity: 0;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
		to {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	@keyframes user-tick {
		0% {
			opacity: 0;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
		10% {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
		10%, 90% {
			opacity: 1;
		}
		to {
			opacity: 0;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
	}
	@keyframes steady-blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes blink {
		0%, 30% {
			opacity: 0;
		}
		10%, 40% {
			opacity: 1;
		}
	}
	@keyframes waggle {
		0% {
			transform: rotate(-12deg);
		}
		10% {
			transform: rotate(12deg);
		}
		40% {
			transform: rotate(-25deg);
		}
		60% {
			transform: rotate(20deg);
		}
		80% {
			transform: rotate(-15deg);
		}
		to {
			transform: rotate(-12deg);
		}
	}

	@keyframes brand-motion {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(2px, -2px);
		}
		40% {
			transform: translate(2px, 2px);
		}
		60% {
			transform: translate(-2px, 2px);
		}
		80% {
			transform: translate(-2px, -2px);
		}
		to {
			transform: translate(0);
		}
	}
	@keyframes checkmark {
		0% {
			stroke-dasharray: 10;
			stroke-dashoffset: 10;
		}
		10%, 50% {
			stroke-dashoffset: 0;
		}
		55%, to {
			stroke-dashoffset: 10;
		}
	}
	@keyframes errormark {
		0%, 25%, 50%, 75% {
			stroke-dasharray: 10;
			stroke-dashoffset: 10;
		}
		30%, 45%, 80%, 95% {
			stroke-dashoffset: 0;
		}
	}
	@keyframes marquee-v-animation {
		0% {
			background-position: -50% 100%;
		}
		to {
			background-position: 0 100%;
		}
	}
</style>

{#each sections as section}
<div class={`accordion__item accordion__item--${section.class}`} data-active={section.active}>
	<div class="accordion__trigger" data-active={section.active} on:click={() => expand(section) }>
		{#if section.gaming}
			<div class="accordion-icon" data-active={section.active}>
				<!-- <svg class="svg-duck" version="1.1" viewbox="0 0 24 24">
				<path class="svg-layout__frame" d="M5,3h14c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5C3,3.9,3.9,3,5,3z"></path>
				<line class="svg-layout__horizontal" x1="3" x2="21" y1="9" y2="9"></line>
				<line class="svg-layout__vertical" x1="9" x2="9" y1="21" y2="3"></line></svg> -->
				<!-- Generator: Adobe Illustrator 25.1.0, SVG Export Plug-In  -->
			<svg version="1.1" viewbox="0 0 24 24" class="svg-gaming">
				<line x1="7.8" y1="9.1" x2="7.8" y2="12.4"/>
				<line x1="9.4" y1="10.7" x2="6.1" y2="10.7"/>
				<circle cx="13.8" cy="10.7" r="0.1"/>
				<circle cx="15.8" cy="8.7" r="0.1"/>
				<circle cx="17.8" cy="10.7" r="0.1"/>
				<circle cx="15.8" cy="12.7" r="0.1"/>
				<path d="M4.1,18.6c-0.2,0-0.5,0-0.7-0.1c-0.8-0.3-1.3-1-1.3-1.8c0-0.9,0-2.5,0.6-4.9c0.9-3.6,1.8-6,4-6.6
					c1-0.3,1.8-0.2,2.7,0.1c0.7,0.2,1.5,0.4,2.8,0.4s2.1-0.2,2.8-0.4c0.9-0.2,1.6-0.4,2.7-0.1c2.1,0.6,3.1,3,4,6.6
					c0.6,2.4,0.6,4,0.6,4.9c0,0.8-0.6,1.5-1.3,1.8c-0.8,0.3-1.6,0.1-2.2-0.5c-0.3-0.3-0.6-0.7-1-1.1c-1.1-1.4-1.4-1.5-4.9-1.5h-1.1
					c-3.6,0-3.8,0.1-4.9,1.5c-0.4,0.4-0.7,0.8-1,1.1C5.2,18.4,4.6,18.6,4.1,18.6z"/>
			</svg>
			</div>
		{/if}
		{#if section.literacy}
			<div class="accordion-icon" data-active={section.active}>
				<svg
					viewBox="0 0 24 24"
					class="svg-literacy"
				>
					<path d="M2,3h6c2.2,0,4,1.8,4,4v14c0-1.7-1.3-3-3-3H2V3z"/>
					<path d="M22,3h-6c-2.2,0-4,1.8-4,4v14c0-1.7,1.3-3,3-3h7V3z"/>
					<path class="svg-literacy__page" d="M22,18V3"/>
				</svg>
			</div>
		{/if}
		{#if section.planet}
			<div class="accordion-icon" data-active={section.active}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="2" y1="12" x2="22" y2="12"></line>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
				</svg>
			</div>
		{/if}
		{#if section.checkright}
			<div class="accordion-icon" data-active={section.active}>
				<svg class="svg-duck" version="1.1" viewbox="0 0 24 24">
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
					<polyline points="22 4 12 14.01 9 11.01"></polyline>
				</svg>
			</div>
		{/if}
		{#if section.users}
			<div class="accordion-icon" data-active={section.active}>
				<svg class="svg-duck" version="1.1" viewbox="0 0 24 24">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
				</svg>
			</div>
		{/if}
        <div class="accordion-title">
          <h5>{section.title}</h5>
        </div>
    </div>
	{#if section.active}
		<div class="accordion-content" transition:slide>
			<p>{section.content}</p>
		</div>
	{/if}
</div>
{/each}