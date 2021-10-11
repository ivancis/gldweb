<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content {
		display: grid;
		grid-gap: 3rem;
		margin: 0 auto auto;
		width: 100%;
	}

	.content::before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		background: var(--background);
		height: 100vh;
		width: 100vw;
		pointer-events: none;
		z-index: 3;
		animation: fade-out .05s linear both;
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.content :global( > *) {
		opacity: 0;
		animation: fade-in .2s linear both;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.content :global(.intern-nav) {
		display: flex;
		align-items: center;
		justify-content: center;
		position: sticky;
		top: 0;
		padding: 0 0.5rem;
	    width: 100%;
		z-index: 1;
	}

	@media (min-width: 740px) {
		.content :global(.intern-nav) {
			padding: 0 0 1rem;
		}
	}

	.content :global(.intern-nav:before) {
		content: "";
		background: var(--bg);
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    z-index: -1;
		opacity: var(--intern-nav-bg-opacity, 0.8);
		transition: opacity .3s cubic-bezier(.445, .05, .55, .95);
	}

	.content :global(.intern-nav:focus-visible),
	.content :global(.intern-nav:focus-within),
	.content :global(.intern-nav:hover) {
		--intern-nav-bg-opacity: 0.97;
	}
	
	.content :global(.intern-nav:hover:before) {
		transition-duration: .05s;
	}

	.content :global(.intern-nav .col) {
		display: grid;
		grid-template-columns: 1fr auto auto;
		grid-gap: 2rem;
	    margin: 0 0 0 -1.5rem;
    	width: calc(100% + 3rem);
		max-width: var(--colSize);
	}

	.content :global(.intern-nav__link) {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		font-size: 0.875rem;
		padding: 1rem;
		text-decoration: none;
		align-items: center;
		margin: auto;
		border-radius: 0.25rem;
    	color: var(--text);
	}
	.content :global(.intern-nav__link svg) {
		transition: fill .2s cubic-bezier(.445, .05, .55, .95);
	}

	.content :global(.intern-nav__link:hover svg) {
		fill: currentColor;
	}

	.content :global(.intern-nav__link--home) {
		margin: auto auto auto 0;
	}

	.content :global(.lists) {
		display: flex;
		flex-wrap: wrap;
    	gap: 2rem;
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		max-width: var(--colSize);
	}

	.content :global(.list-text) {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
		max-width: 100%;
		flex-wrap: wrap;
	}

	.content :global(.list-text > li) {
		display: grid;
	    grid-template-columns: auto 1fr;
		max-width: 75ch;
	}

	.content :global(.list-text h4) {
		opacity: .5;
	}

	.content :global(.list-number) {
		display: flex;
		flex-wrap: wrap;
		max-width: var(--colSize);
	}

	.content :global(.list-number > li) {
		display: flex;
		flex-direction: column;
	}

	.content :global(.list-grid) {
		display: flex;
		flex-wrap: wrap;
	}
	.content :global(.lists .list-title) {
		font-weight: var(--bold);
	}

	.content :global(.list-text > li:not(.list-title)::before) {
		content: "";
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 2px;
		background: var(--border);
		margin: 0.3rem .5rem auto 0;
	}

	.content :global(.title-box) {
		display: grid;
		grid-gap: 0.25rem;
		position: relative;
		padding: 5vh 2rem;
		min-height: 25vh;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
	}

	.content :global(.title-box::before) {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		width: 100%;
		max-width: var(--colSizeLg);
		margin: 0 auto;
		height: 100%;
		background-color: var(--border);
		z-index: -1;
		opacity: 0.2;
		border-radius: 0.5rem;
		pointer-events: none;
	}

	.content :global(.title-description) {
		display: grid;
		grid-gap: 1rem;
		width: 100%;
		margin: 2rem 0;
		max-width: 75ch;
	}
	
	.content :global(.title-box .col) {
		display: grid;
		grid-gap: 0.5rem;
		margin-left: auto;
		margin-right: auto;
		max-width: var(--colSize);
		width: 100%;
	}

	.content :global(.text-box) {
		display: grid;
		grid-gap: 1rem;
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		max-width: var(--colSize);
	}

	.content :global(.text-box > p) {
    	width: 100%;
		max-width: 75ch;
	}

	.content :global(.list-points) {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		max-width: var(--colSize);
	}

	.content :global(.list-points--painpoints) {
		--pointColor: var(--pain);
	}

	.content :global(.list-points--gainpoints) {
		--pointColor: var(--gain);
	}
	.content :global(.list-points ul) {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
	}
	.content :global(.list-points ul li) {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.content :global(.list-points ul li::before) {
		content: "";
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 2px;
		background: var(--pointColor);
	}

	.content :global(.picture-lists) {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
		max-width: var(--colSizeLg);
		margin: 0 auto;
	}

	@media (max-width: 640px) {
		.content :global(.picture-lists) {
			padding: 0rem;
		}
	}


	.content :global(.picture-lists > picture) {
		display: grid;
		position: relative;
		padding: 2px;
		overflow: hidden;
		min-width: calc(50% - 1rem);
		flex: 1 0 0;
	}
	
	.content :global(.picture-lists > picture > *) {
		border-radius: 2px;
	}
	
	
	.content :global(.picture-lists > picture::before) {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		width: 100%;
		max-width: var(--colSizeLg);
		margin: 0 auto;
		height: 100%;
		background-color: var(--border);
		z-index: -1;
		border-radius: 0.25rem;
		pointer-events: none;
	}

	@media (max-width: 640px) {
		.content :global(.picture-lists > picture) {
			flex: 0 1 auto;
		}
	}

	.content :global(.picture-lists > ul) {
		padding: 1rem;
		gap: 2rem;
	}

	.content :global(.picture-lists > .group) {
		display: grid;
    	overflow: hidden;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: var(--ballpitArea, ". . c" ". . ." "a . b");
		border-radius: 0.25rem;
		width: 90%;
		max-width: var(--colSize);
		height: 90%;
		margin: auto;
		background: var(--bgLight);
	}

	.content :global(.picture-lists > .group > .ball) {
		margin: auto;
		pointer-events: none;
	}
	
	.content :global(.picture-lists > .group > .ball .ball-circle) {
		fill: linear-gradient(248.94deg, #FF6E47 0.62%, #F8464E 96.81%);
	}

	.content :global(.picture-lists > .group > .ball:nth-child(1)) {
		grid-area: a;
		transform: rotate(-75deg) scale(2);
	}
	
	.content :global(.picture-lists > .group > .ball:nth-child(2)) {
		grid-area: b;
    transform: rotate(-180deg) scale(4);
    transform-origin: 60% 60%;

	}
	
	.content :global(.picture-lists > .group > .ball:nth-child(3)) {
		grid-area: c;
    transform: rotate(40deg) scale(3);
    transform-origin: 70% 0%;
	}
	
	.content :global(.group::before) {
		/* grid-area: 1/1/1/1; */
		/* content: ""; */
		/* padding-top: 66.64%; */
	}
	
	.content :global(img) {
		/* grid-area: 1/1/1/1; */
    	width: 100%;
	}
</style>

<svelte:head>
	<title>{post.browsertitle}</title>
</svelte:head>

<div class='content'>
	{@html post.html}
</div>
