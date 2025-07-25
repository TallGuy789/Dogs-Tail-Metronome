<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="2"
    >
      <v-app-bar-title>
        Dog's Tail
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        icon
        :disabled="$route.path === '/preferences'"
        @click="$router.push('/preferences')"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-btn
        icon
        :disabled="$route.path === '/about'"
        @click="$router.push('/about')"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useSettingsStore } from './stores/settings'

export default {
	name: 'App',
	setup() {
		const settingsStore = useSettingsStore()

		// Load settings from localStorage on app start
		settingsStore.loadFromLocalStorage()

		return {
			settingsStore
		}
	}
}
</script>

<style>
/* Global styles */
html {
	overflow-y: auto;
}

body {
	font-family: 'Roboto', sans-serif;
}

/* Prevent text selection on buttons and controls */
.v-btn, .v-slider, .v-input {
	user-select: none;
}

/* Custom styles for metronome elements */
.metronome-display {
	font-family: 'Roboto Mono', monospace;
	font-weight: bold;
}

.beat-indicator {
	transition: all 0.1s ease;
}

.beat-active {
	transform: scale(1.1);
	background-color: var(--v-primary-base) !important;
}
</style>
