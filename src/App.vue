<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div id="app">
		<header>
			<h1>Dog's Tail Metronome</h1>
		</header>

		<main>
			<HelloWorld msg="Welcome to your Vue.js App!" />
		</main>
	</div>
</template>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

header {
	margin-bottom: 2rem;
}

h1 {
	font-weight: 500;
	font-size: 2.6rem;
	position: relative;
	top: -10px;
}
</style>
