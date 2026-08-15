<template>
	<nav class="site-nav fixed top-0 left-0 right-0 bg-background z-40">
		<div class="max-w-screen-xl mx-auto px-2 flex h-[var(--nav-height)]">
			<NuxtLink
				to="/"
				class="nav-logo block relative overflow-hidden"
				aria-label="Home"
			>
				<img
					src="~/assets/img/icon-small.png"
					alt=""
					width="32"
					height="32"
				/>
			</NuxtLink>
			<SiteNavLinks class="ml-6 hidden sm:flex" />
			<div class="flex ml-auto pl-4 items-center sm:hidden">
				<button
					class="toggle-nav"
					:class="{ active: navOpen }"
					@click="navOpen = !navOpen"
				>
					<span class="top" />
					<span class="mid" />
					<span class="bottom" />
				</button>
			</div>
		</div>
		<transition-expand>
			<div v-if="navOpen" class="sm:hidden">
				<SiteNavLinks class="p-4" layout="vertical" />
			</div>
		</transition-expand>
	</nav>
</template>

<script setup>
const navOpen = ref(false)
</script>

<style lang="scss" scoped>
.site-nav {
	box-shadow: 0 1px 1px 1px rgb(255 255 255 / 10%);
}

@supports (backdrop-filter: blur(4px)) {
	.site-nav {
		@apply bg-opacity-50 backdrop-blur-sm;
	}
}
@supports not (backdrop-filter: blur(4px)) {
	.site-nav {
		@apply bg-opacity-90;
	}
}

.nav-logo {
	&:after {
		content: '';
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 0;
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-primary) 80%, transparent);
		transition: all 300ms ease-in-out;
	}

	img {
		$navLogoMargin: 0.5rem;
		margin: $navLogoMargin;
		width: calc(var(--nav-height) - $navLogoMargin * 2);
		height: calc(var(--nav-height) - $navLogoMargin * 2);
	}

	&:hover,
	&:active {
		&:after {
			width: 200%;
			height: 200%;
		}
	}
}

.toggle-nav {
	width: 50px;
	height: 50px;
	position: relative;

	span {
		width: 20px;
		height: 2px;
		margin: auto;
		background: white;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transition: all 0.4s ease;

		&.top {
			transform: translateY(-8px);
		}

		&.bottom {
			transform: translateY(8px);
		}
	}
	&.active {
		.top {
			transform: rotate(-45deg);
		}
		.mid {
			transform: translateX(-20px) rotate(360deg);
			opacity: 0;
		}
		.bottom {
			transform: rotate(45deg);
		}
	}
}
</style>
