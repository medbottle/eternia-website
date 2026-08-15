<template>
	<div class="container mx-auto px-4">
		<div class="flex items-center gap-8 lg:gap-14 mb-8">
			<div class="how-to-preview hidden md:block game-shot-card max-w-[420px] w-full">
				<video
					src="/img/how-to-preview.webm"
					autoplay
					loop
					muted
					playsinline
				/>
			</div>

			<div class="flex-grow-1">
				<h2 class="mb-4 lg:mb-8 font-semibold uppercase tracking-wide text-3xl">
					Welcome to Meranthe
				</h2>
				<p class="text-xl leading-8">
					Getting started is quick and free. Download the launcher, create your
					character, and follow the in-game tutorial to learn the basics.
				</p>
			</div>
		</div>

		<div class="card">
			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step"><span>1</span></div>
				<div class="flex-grow pb-6 md:pb-10 pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">
						Download
					</h3>
					<p class="mb-4">
						Install the game launcher to connect to Meranthe. We recommend using
						the official launcher rather than connecting manually.
					</p>
					<a
						href="https://chronicles-of-esshar.com/download/Setup_Esshar.exe"
						class="cta"
						target="_blank"
						rel="external"
					>
						Download Launcher
						<Icon
							name="fa6-solid:square-arrow-up-right"
							class="relative ml-2 bottom-[-2px]"
						/>
					</a>
				</div>
			</div>

			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step"><span>2</span></div>
				<div class="flex-grow pb-6 md:pb-10 pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">
						Create your character
					</h3>
					<p class="mb-4">
						Choose your starting location and race, then write a description for
						your character. You can update your description later from the
						in-game options menu.
					</p>
					<a
						href="https://chronicles-of-eternia.com/wiki/Player_Guide"
						class="cta"
						target="_blank"
						rel="external"
					>
						Read the Player Guide
						<Icon
							name="fa6-solid:square-arrow-up-right"
							class="relative ml-2 bottom-[-2px]"
						/>
					</a>
				</div>
			</div>

			<div class="flex gap-4 sm:gap-8">
				<div class="how-to-step how-to-step--no-line"><span>3</span></div>
				<div class="flex-grow pt-2">
					<h3 class="content-heading content-heading--secondary mb-4">Play!</h3>
					<p class="mb-4">
						After creating your character, complete the tutorial quests with the
						Tutorial NPC to learn controls, shopping, combat, dungeons, and
						other core systems. Join the community for help, events, and
						roleplay.
					</p>
					<div class="flex flex-col md:flex-row gap-4 md:gap-8 py-4">
						<a
							href="https://discord.com/invite/meranthe?utm_source=website"
							class="list-link card"
							target="_blank"
							rel="external"
						>
							<strong>Join the Discord</strong>
							<p>
								Meet other players, ask questions, and keep up with events and
								announcements.
							</p>
						</a>
						<a
							href="https://chronicles-of-eternia.com/forum/"
							class="list-link card"
							target="_blank"
							rel="external"
						>
							<strong>Browse the forums</strong>
							<p>
								Read guides, find guilds and factions, and explore community
								discussions.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	name: 'PageHowToPlay',
	title: 'How To Play',
})
</script>

<style lang="scss" scoped>
.how-to-preview {
	aspect-ratio: 1000 / 711;
	overflow: hidden;

	video {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
}

.how-to-step {
	@apply relative flex-shrink-0;

	&:before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 7px;
		margin-left: -3px;
		background: #565c6c;
	}

	&--no-line:before {
		content: none;
	}

	> span {
		@apply relative rounded-full text-3xl font-medium w-16 h-16 justify-center flex items-center;
		background: #565c6c;

		@screen sm {
			@apply w-20 h-20 text-4xl;
		}
	}
}

.list-link {
	@apply relative flex flex-col text-white shadow-inner;
	background: #454a56;

	@screen md {
		@apply w-1/2;
	}

	&:before {
		@apply transition-all duration-300 rounded-b-sm bg-opacity-90;
		content: '';
		position: absolute;
		bottom: -1px;
		left: -1px;
		right: -1px;
		height: 4px;
		background: linear-gradient(
			135deg,
			var(--color-primary) 0%,
			var(--color-primary-dark) 100%
		);
	}

	> * {
		@apply relative z-10;
	}

	strong {
		@apply mb-2 uppercase tracking-wide;
	}

	&:hover,
	&:active {
		&:before {
			@apply rounded-t-sm;
			height: calc(100% + 2px);
		}
	}
}
</style>
