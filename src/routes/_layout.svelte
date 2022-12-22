<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		display: grid;
		align-content: flex-start;
		grid-gap: 1rem;
		padding: 1rem 1.5rem 10vh;
		width: 100%;
		min-height: 100vh;
		margin: 0;
		font-family: var(--family);
		letter-spacing: 0.025rem;
		color: var(--text);
		background-color: var(--bg);
		background: linear-gradient(346deg, var(--bg), var(--thumb-bg));
		background-size: 400% 400%;

		-webkit-animation: AnimationName 10s ease infinite;
		-moz-animation: AnimationName 10s ease infinite;
		animation: AnimationName 10s ease infinite;


		transition: color .2s cubic-bezier(.445, .05, .55, .95),
		background .2s cubic-bezier(.445, .05, .55, .95),
		padding .2s cubic-bezier(.445, .05, .55, .95);
	}

	@keyframes AnimationName {
		0%{background-position:0% 97%}
		50%{background-position:100% 4%}
		100%{background-position:0% 97%}
	}
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>