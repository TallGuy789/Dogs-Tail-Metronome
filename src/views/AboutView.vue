<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <v-card class="mb-4">
          <v-card-title class="d-flex align-center">
            <v-btn
              icon
              variant="plain"
              class="mr-2"
              @click="$router.push('/')"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            About
          </v-card-title>
        </v-card>

        <!-- App Info -->
        <v-card class="mb-4">
          <v-card-text class="text-center">
            <v-avatar
              size="80"
              class="mb-4"
            >
              <v-icon
                size="48"
                color="primary"
              >
                mdi-metronome
              </v-icon>
            </v-avatar>
            <h1 class="text-h4 mb-2">
              Dog's Tail
            </h1>
            <p class="text-h6 text-medium-emphasis mb-4">
              Online Metronome
            </p>
            <v-chip
              color="primary"
              variant="outlined"
            >
              Version 1.0.0
            </v-chip>
          </v-card-text>
        </v-card>

        <!-- Description -->
        <v-card class="mb-4">
          <v-card-title>About This App</v-card-title>
          <v-card-text>
            <p class="mb-3">
              Dog's Tail is an online metronome app with some unique features. Used creatively,
              it will greatly improve your musicianship.
            </p>
            <p class="mb-3">
              This Progressive Web App works on both desktop and mobile devices, providing
              precise timing for your musical practice sessions.
            </p>
          </v-card-text>
        </v-card>

        <!-- Features -->
        <v-card class="mb-4">
          <v-card-title>Key Features</v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item
                v-for="feature in features"
                :key="feature.title"
                :prepend-icon="feature.icon"
              >
                <v-list-item-title>{{ feature.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ feature.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- Technical Details -->
        <v-card class="mb-4">
          <v-card-title>Technical Details</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="success"
                  class="mb-2"
                >
                  mdi-vuejs
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  Vue.js 3
                </div>
                <div class="text-caption text-medium-emphasis">
                  Framework
                </div>
              </v-col>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="primary"
                  class="mb-2"
                >
                  mdi-material-design
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  Vuetify
                </div>
                <div class="text-caption text-medium-emphasis">
                  UI Library
                </div>
              </v-col>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="orange"
                  class="mb-2"
                >
                  mdi-lightning-bolt
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  Vite
                </div>
                <div class="text-caption text-medium-emphasis">
                  Build Tool
                </div>
              </v-col>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="blue"
                  class="mb-2"
                >
                  mdi-cellphone-link
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  PWA
                </div>
                <div class="text-caption text-medium-emphasis">
                  Progressive Web App
                </div>
              </v-col>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="purple"
                  class="mb-2"
                >
                  mdi-database
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  Pinia
                </div>
                <div class="text-caption text-medium-emphasis">
                  State Management
                </div>
              </v-col>
              <v-col
                cols="6"
                md="4"
                class="text-center"
              >
                <v-icon
                  size="32"
                  color="red"
                  class="mb-2"
                >
                  mdi-test-tube
                </v-icon>
                <div class="text-body-2 font-weight-medium">
                  Vitest
                </div>
                <div class="text-caption text-medium-emphasis">
                  Testing
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Links -->
        <v-card class="mb-4">
          <v-card-title>Links & Resources</v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item
                v-for="link in links"
                :key="link.title"
                :prepend-icon="link.icon"
                class="cursor-pointer"
                @click="openLink(link.url)"
              >
                <v-list-item-title>{{ link.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ link.description }}</v-list-item-subtitle>
                <template #append>
                  <v-icon>mdi-open-in-new</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- License -->
        <v-card>
          <v-card-title>License</v-card-title>
          <v-card-text>
            <p class="mb-3">
              This project is licensed under the MIT License.
            </p>
            <p class="text-caption text-medium-emphasis">
              Copyright © {{ currentYear }} Dog's Tail. All rights reserved.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from 'vue'

export default {
	name: 'AboutView',
	setup() {
		const currentYear = computed(() => new Date().getFullYear())

		const features = [
			{
				icon: 'mdi-volume-off',
				title: 'Random Mute Mode',
				description: 'Random percentage of beats muted after specified measures'
			},
			{
				icon: 'mdi-music-note-off',
				title: 'Off Beat Mode',
				description: 'Count-in with TTS, off beats fade in gradually'
			},
			{
				icon: 'mdi-tune',
				title: 'Real-time Adjustments',
				description: 'Change any setting while the metronome is running'
			},
			{
				icon: 'mdi-cellphone',
				title: 'Mobile First',
				description: 'Responsive design optimized for mobile devices'
			},
			{
				icon: 'mdi-content-save',
				title: 'Local Storage',
				description: 'All settings saved automatically in browser'
			},
			{
				icon: 'mdi-worker',
				title: 'Service Worker',
				description: 'Continues timing even when device sleeps'
			}
		]

		const links = [
			{
				icon: 'mdi-github',
				title: 'Source Code',
				description: 'View the project on GitHub',
				url: 'https://github.com/yourusername/dogs-tail'
			},
			{
				icon: 'mdi-bug',
				title: 'Report Issues',
				description: 'Found a bug? Let us know',
				url: 'https://github.com/yourusername/dogs-tail/issues'
			},
			{
				icon: 'mdi-heart',
				title: 'Support Development',
				description: 'Help us improve the app',
				url: 'https://github.com/sponsors/yourusername'
			}
		]

		const openLink = (url) => {
			window.open(url, '_blank', 'noopener,noreferrer')
		}

		return {
			currentYear,
			features,
			links,
			openLink
		}
	}
}
</script>

<style scoped>
.cursor-pointer {
	cursor: pointer;
}

.v-list-item:hover {
	background-color: rgba(0, 0, 0, 0.04);
}
</style>
