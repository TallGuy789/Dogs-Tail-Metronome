import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
	state: () => ({
		// Visual preferences
		theme: 'light', // 'light' | 'dark' | 'auto'
		colorScheme: 'blue',

		// Audio preferences
		clickSoundType: 'default', // 'default' | 'wood' | 'metal' | 'beep'
		globalVolume: 75,
		accentVolume: 90,

		// Behavior preferences
		startOnLoad: false,
		saveLastBpm: true,
		keepScreenOn: true,

		// Advanced settings
		audioLatency: 0, // ms compensation
		visualFeedback: true,
		vibration: false // for mobile devices
	}),

	getters: {
		isDarkMode: (state) => {
			if (state.theme === 'auto') {
				return window.matchMedia('(prefers-color-scheme: dark)').matches
			}
			return state.theme === 'dark'
		}
	},

	actions: {
		updateTheme(newTheme) {
			this.theme = newTheme
			this.saveToLocalStorage()
		},

		updateVolume(newVolume) {
			this.globalVolume = Math.max(0, Math.min(100, newVolume))
			this.saveToLocalStorage()
		},

		toggleKeepScreenOn() {
			this.keepScreenOn = !this.keepScreenOn
			this.saveToLocalStorage()
		},

		saveToLocalStorage() {
			try {
				localStorage.setItem('dogsTailSettings', JSON.stringify(this.$state))
			} catch (error) {
				console.warn('Failed to save settings to localStorage:', error)
			}
		},

		loadFromLocalStorage() {
			try {
				const saved = localStorage.getItem('dogsTailSettings')
				if (saved) {
					const settings = JSON.parse(saved)
					this.$patch(settings)
				}
			} catch (error) {
				console.warn('Failed to load settings from localStorage:', error)
			}
		},

		resetToDefaults() {
			this.$reset()
			this.saveToLocalStorage()
		}
	}
})
