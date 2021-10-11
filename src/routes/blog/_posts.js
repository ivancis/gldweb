// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'post-01',
		slug: 'post-01',
		browsertitle: 'post-01__browserTitle',
		description: 'post-01__description',
		date: 2021,
		cover: 'post-01__cover',
		html: `
			<div class="intern-nav">
				<div class="col">
					<a class="intern-nav__link intern-nav__link--home" rel='prefetch' href='.'>
						<svg title="home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
							<path stroke="currentColor" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-03'>
						<svg title="triangle-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M4.4,10.6c-0.5,0.8-0.2,1.8,0.6,2.3l11.7,7c0.2,0.2,0.5,0.2,0.8,0.2c0.9,0,1.7-0.7,1.7-1.7V4.5 c0-0.2-0.1-0.6-0.2-0.8c-0.5-0.8-1.5-1.1-2.2-0.6L4.9,10C4.7,10.2,4.5,10.3,4.4,10.6z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-02'>
						<svg title="triangle-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M19.1,10L7.4,3C6.6,2.6,5.6,2.8,5.1,3.6C5,3.9,4.9,4.2,4.9,4.5v14.1c0,0.9,0.7,1.7,1.7,1.7 c0.3,0,0.6-0.1,0.8-0.2l11.7-7c0.8-0.5,1.1-1.5,0.6-2.3C19.5,10.3,19.3,10.2,19.1,10z"/>
						</svg>
					</a>
				</div>
			</div>
			<div class="text-box">
				<p>Hello, post-01</p>
			</div>
		`
	},

	{
		title: 'post-02',
		slug: 'post-02',
		browsertitle: 'post-02__browserTitle',
		description: 'post-02__description',
		date: 2021,
		cover: 'post-02__cover',
		html: `
			<div class="intern-nav">
				<div class="col">
					<a class="intern-nav__link intern-nav__link--home" rel='prefetch' href='.'>
						<svg title="home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
							<path stroke="currentColor" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-01'>
						<svg title="triangle-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M4.4,10.6c-0.5,0.8-0.2,1.8,0.6,2.3l11.7,7c0.2,0.2,0.5,0.2,0.8,0.2c0.9,0,1.7-0.7,1.7-1.7V4.5 c0-0.2-0.1-0.6-0.2-0.8c-0.5-0.8-1.5-1.1-2.2-0.6L4.9,10C4.7,10.2,4.5,10.3,4.4,10.6z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-03'>
						<svg title="triangle-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M19.1,10L7.4,3C6.6,2.6,5.6,2.8,5.1,3.6C5,3.9,4.9,4.2,4.9,4.5v14.1c0,0.9,0.7,1.7,1.7,1.7 c0.3,0,0.6-0.1,0.8-0.2l11.7-7c0.8-0.5,1.1-1.5,0.6-2.3C19.5,10.3,19.3,10.2,19.1,10z"/>
						</svg>
					</a>
				</div>
			</div>
			<div class="text-box">
				<p>Hello, post-02</p>
			</div>
		`
	},

	{
		title: 'post-03',
		slug: 'post-03',
		browsertitle: 'post-03__browserTitle',
		description: 'post-03__description',
		date: 2021,
		cover: 'post-03__cover',
		html: `
			<div class="intern-nav">
				<div class="col">
					<a class="intern-nav__link intern-nav__link--home" rel='prefetch' href='.'>
						<svg title="home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
							<path stroke="currentColor" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-02'>
						<svg title="triangle-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M4.4,10.6c-0.5,0.8-0.2,1.8,0.6,2.3l11.7,7c0.2,0.2,0.5,0.2,0.8,0.2c0.9,0,1.7-0.7,1.7-1.7V4.5 c0-0.2-0.1-0.6-0.2-0.8c-0.5-0.8-1.5-1.1-2.2-0.6L4.9,10C4.7,10.2,4.5,10.3,4.4,10.6z"/>
						</svg>
					</a>
					<a class="intern-nav__link" rel='prefetch' href='/blog/post-01'>
						<svg title="triangle-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-triangle">
							<path stroke="currentColor" d="M19.1,10L7.4,3C6.6,2.6,5.6,2.8,5.1,3.6C5,3.9,4.9,4.2,4.9,4.5v14.1c0,0.9,0.7,1.7,1.7,1.7 c0.3,0,0.6-0.1,0.8-0.2l11.7-7c0.8-0.5,1.1-1.5,0.6-2.3C19.5,10.3,19.3,10.2,19.1,10z"/>
						</svg>
					</a>
				</div>
			</div>
			<div class="text-box">
				<p>Hello, post-03</p>
			</div>
		`
	},

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
