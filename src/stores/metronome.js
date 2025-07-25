import { defineStore } from 'pinia'

export const useMetronomeStore = defineStore('metronome', {
	state: () => ({
		// Metronome basic settings
		bpm: 120,
		isPlaying: false,
		beatCount: 4,
		currentBeat: 0,

		// Random Mute Mode
		randomMuteEnabled: false,
		randomMutePercentage: 25,
		randomMuteMeasures: 4,

		// Off Beat Mode
		offBeatEnabled: false,
		offBeatMeasures: 4,

		// Audio settings
		volume: 75,
		clickSound: 'default',
		accentEnabled: true,

		// Status
		statusMessage: 'Ready',
		measureCount: 0
	}),

	getters: {
		isValidBpm: (state) => state.bpm >= 1 && state.bpm <= 200,
		currentTempo: (state) => {
			if (state.bpm < 60) return 'Largo'
			if (state.bpm < 76) return 'Adagio'
			if (state.bpm < 108) return 'Andante'
			if (state.bpm < 120) return 'Moderato'
			if (state.bpm < 168) return 'Allegro'
			return 'Presto'
		}
	},

	actions: {
		setBpm(newBpm) {
			if (newBpm >= 1 && newBpm <= 200) {
				this.bpm = newBpm
			}
		},

		increaseBpm(amount = 1) {
			this.setBpm(this.bpm + amount)
		},

		decreaseBpm(amount = 1) {
			this.setBpm(this.bpm - amount)
		},

		togglePlayback() {
			this.isPlaying = !this.isPlaying
			this.statusMessage = this.isPlaying ? 'Playing' : 'Stopped'
		},

		nextBeat() {
			this.currentBeat = (this.currentBeat + 1) % this.beatCount
			if (this.currentBeat === 0) {
				this.measureCount++
			}
		},

		reset() {
			this.isPlaying = false
			this.currentBeat = 0
			this.measureCount = 0
			this.statusMessage = 'Ready'
		},

		updateStatus(message) {
			this.statusMessage = message
		}
	}
})
