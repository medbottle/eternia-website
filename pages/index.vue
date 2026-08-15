<template>
	<div>
		<HeroHeader />

		<main class="content py-12 lg:text-lg lg:py-16 xl:py-24 debris-bg">
			<div class="max-w-screen-xl mx-auto px-4">
				<div class="card mb-8 lg:mb-12">
					<h2 class="mb-4 lg:mb-5 content-heading content-heading--primary">
						Forge your fate
					</h2>

					<p class="mb-4 lg:mb-6">
						Meranthe is a role-playing game and an immersive, in-depth sandbox,
						where players build the towns, craft the items, govern the society,
						and add to the ongoing story. It is a persistent universe with over
						10 real world years of world building, and a millenia+ of events.
					</p>
					<p class="mb-4 lg:mb-6">
						Live, thrive, grow with the world. Add your stories to the
						community, and watch your own and future generations do the same.
					</p>
					<p>
						The game is defined by the day-to-day of life in a world of fantasy
						kingdoms: take on various roles, such as a priest or knight,
						inventor or alchemist, pirate or witch, and pursue individual and
						collective goals. Take on challenges both solo and as a faction,
						small and grand. Participate in Dungeon Master style events
						(supported further by our own systems). More information can be read
						in the
						<a
							href="https://chronicles-of-eternia.com/wiki/Player_Guide"
							target="_blank"
							rel="external"
						>
							Player Guide
						</a>.
					</p>
				</div>

				<div class="flex flex-col lg:flex-row lg:mb-8">
					<div class="flex flex-col mb-8 lg:mr-8 lg:mb-0">
						<h2 class="mb-4 lg:mb-8 content-heading content-heading--primary">
							Gameplay &amp; features
						</h2>

						<ul
							class="flex h-full flex-col justify-between gap-4 ml-6 features"
						>
							<li>
								Play a variety of roles in a fantasy world, from priests and
								knights to inventors, alchemists, pirates, and witches.
							</li>
							<li>
								Build towns, craft items, govern society, and contribute to a
								persistent, player-driven story.
							</li>
							<li>
								Pursue goals on your own or alongside a faction, from small
								personal ambitions to grand world-shaping challenges.
							</li>
							<li>
								Take part in Dungeon Master style events backed by dedicated
								in-game systems.
							</li>
							<li>
								Learn and master magic across many paths, including arcane arts,
								faith, druidry, theurgy, necromancy, and black magic.
							</li>
							<li>
								Choose from a wide range of playable races, such as humans,
								beastkin, drakanites, faeborne, sirenia, and more.
							</li>
							<li>
								Shape the world through crafting and trade, including cooking,
								artificing, farming, mining, and other player-driven
								professions.
							</li>
						</ul>
					</div>

					<div
						class="flex gap-6 justify-center flex-wrap lg:justify-start lg:flex-col lg:gap-8 lg:flex-shrink-0 lg:w-4/12"
					>
						<BaseImage
							class="game-shot-card"
							src="/img/about-preview-1.png"
							width="1000"
							height="710"
							:img-attrs="{ loading: 'lazy', alt: 'Preview' }"
						/>
						<BaseImage
							class="game-shot-card"
							src="/img/about-preview-2.png"
							width="1000"
							height="714"
							:img-attrs="{ loading: 'lazy', alt: 'Preview' }"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
definePageMeta({
	name: 'IndexPage',
	layout: 'home',
})
</script>

<style lang="scss" scoped>
.features {
	li {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 10px;
			left: -16px;
			width: 8px;
			height: 8px;
			background: theme('colors.primary');
		}
	}
}
</style>
