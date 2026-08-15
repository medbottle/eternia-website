<template>
	<NuxtLayout />
</template>

<script setup>
const route = useRoute()
const title = computed(() => {
	let metaTitle = route.meta.title || ''
	if (metaTitle) metaTitle += ' - '
	return `${metaTitle}Chronicles of Eternia`
})

useHead({
	title,
})
</script>
