// Mobile nav toggle
const nav = document.querySelector('.site-nav')
const navToggle = document.querySelector('.nav-toggle')

if (nav && navToggle) {
	navToggle.addEventListener('click', () => {
		const open = nav.classList.toggle('is-open')
		navToggle.setAttribute('aria-expanded', String(open))
	})
}

// Hero video: only added when the visitor hasn't asked for reduced motion
const heroVideo = document.getElementById('hero-video')

if (heroVideo && !window.matchMedia('(prefers-reduced-motion)').matches) {
	heroVideo.parentElement.append(heroVideo.content.cloneNode(true))

	const video = document.querySelector('.intro video')
	const toggle = document.querySelector('.hero-video-toggle')

	toggle.addEventListener('click', () => {
		if (video.paused) {
			video.play()
		} else {
			video.pause()
		}
		toggle.classList.toggle('is-paused', video.paused)
		toggle.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video')
	})
}

// Image lightbox for any .zoomable button
const zoomables = document.querySelectorAll('.zoomable')

if (zoomables.length) {
	const lightbox = document.createElement('dialog')
	lightbox.className = 'lightbox'
	lightbox.innerHTML = `
		<div class="lightbox__body"><img alt=""></div>
		<span class="spinner" hidden></span>
		<button type="button" class="lightbox__close" aria-label="Close">
			<svg class="icon" viewBox="0 0 384 512" aria-hidden="true"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
		</button>`
	document.body.append(lightbox)

	const image = lightbox.querySelector('img')
	const spinner = lightbox.querySelector('.spinner')

	image.addEventListener('load', () => {
		spinner.hidden = true
	})

	// Anything except the image itself closes it, matching the old click-outside
	lightbox.addEventListener('click', (e) => {
		if (e.target !== image) lightbox.close()
	})

	zoomables.forEach((button) => {
		button.addEventListener('click', () => {
			const thumb = button.querySelector('img')
			spinner.hidden = false
			image.src = thumb.currentSrc || thumb.src
			image.setAttribute('width', thumb.getAttribute('width'))
			image.setAttribute('height', thumb.getAttribute('height'))
			image.alt = thumb.alt
			lightbox.showModal()
			if (image.complete) spinner.hidden = true
		})
	})
}

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => {
	el.textContent = new Date().getFullYear()
})
