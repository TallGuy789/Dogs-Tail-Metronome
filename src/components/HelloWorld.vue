<script setup>
const props = defineProps({
	msg: String
})
</script>

<template>
	<div class="greetings">
		<h3>{{ msg }}</h3>
		<p>
			This is a simple Vue.js demo application for the Dog's Tail metronome project.
		</p>
		<p>
			The metronome functionality will be built in future iterations according to the
			<a href="./Docs/Implementation%20Plan.md" target="_blank" rel="noopener">Implementation Plan</a>.
		</p>
	</div>
</template>

<style scoped>
.greetings {
	padding: 1rem;
	max-width: 600px;
	margin: 0 auto;
}

h3 {
	font-size: 1.5rem;
	font-weight: 400;
	margin-bottom: 1rem;
}

p {
	margin-bottom: 1rem;
	line-height: 1.6;
}

a {
	color: #4f46e5;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}
</style>