import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMetronomeStore } from '../stores/metronome'

describe('Metronome Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it('should initialize with default values', () => {
		const store = useMetronomeStore()
		
		expect(store.bpm).toBe(120)
		expect(store.isPlaying).toBe(false)
		expect(store.beatCount).toBe(4)
		expect(store.currentBeat).toBe(0)
		expect(store.statusMessage).toBe('Ready')
	})

	it('should set BPM correctly', () => {
		const store = useMetronomeStore()
		
		store.setBpm(100)
		expect(store.bpm).toBe(100)
		
		// Test boundaries
		store.setBpm(1)
		expect(store.bpm).toBe(1)
		
		store.setBpm(200)
		expect(store.bpm).toBe(200)
		
		// Test invalid values
		store.setBpm(0)
		expect(store.bpm).toBe(200) // Should not change
		
		store.setBpm(201)
		expect(store.bpm).toBe(200) // Should not change
	})

	it('should increase and decrease BPM', () => {
		const store = useMetronomeStore()
		
		store.setBpm(120)
		
		store.increaseBpm(10)
		expect(store.bpm).toBe(130)
		
		store.decreaseBpm(5)
		expect(store.bpm).toBe(125)
		
		store.increaseBpm() // Default increment of 1
		expect(store.bpm).toBe(126)
	})

	it('should toggle playback state', () => {
		const store = useMetronomeStore()
		
		expect(store.isPlaying).toBe(false)
		expect(store.statusMessage).toBe('Ready')
		
		store.togglePlayback()
		expect(store.isPlaying).toBe(true)
		expect(store.statusMessage).toBe('Playing')
		
		store.togglePlayback()
		expect(store.isPlaying).toBe(false)
		expect(store.statusMessage).toBe('Stopped')
	})

	it('should advance beats correctly', () => {
		const store = useMetronomeStore()
		
		expect(store.currentBeat).toBe(0)
		expect(store.measureCount).toBe(0)
		
		// First 3 beats stay in same measure
		store.nextBeat()
		expect(store.currentBeat).toBe(1)
		expect(store.measureCount).toBe(0)
		
		store.nextBeat()
		expect(store.currentBeat).toBe(2)
		expect(store.measureCount).toBe(0)
		
		store.nextBeat()
		expect(store.currentBeat).toBe(3)
		expect(store.measureCount).toBe(0)
		
		// Fourth beat wraps to 0 and increments measure
		store.nextBeat()
		expect(store.currentBeat).toBe(0)
		expect(store.measureCount).toBe(1)
	})

	it('should reset state correctly', () => {
		const store = useMetronomeStore()
		
		// Change state
		store.togglePlayback()
		store.nextBeat()
		store.nextBeat()
		
		expect(store.isPlaying).toBe(true)
		expect(store.currentBeat).toBe(2)
		
		// Reset
		store.reset()
		expect(store.isPlaying).toBe(false)
		expect(store.currentBeat).toBe(0)
		expect(store.measureCount).toBe(0)
		expect(store.statusMessage).toBe('Ready')
	})

	it('should calculate tempo correctly', () => {
		const store = useMetronomeStore()
		
		store.setBpm(50)
		expect(store.currentTempo).toBe('Largo')
		
		store.setBpm(70)
		expect(store.currentTempo).toBe('Adagio')
		
		store.setBpm(100)
		expect(store.currentTempo).toBe('Andante')
		
		store.setBpm(115)
		expect(store.currentTempo).toBe('Moderato')
		
		store.setBpm(140)
		expect(store.currentTempo).toBe('Allegro')
		
		store.setBpm(180)
		expect(store.currentTempo).toBe('Presto')
	})

	it('should validate BPM correctly', () => {
		const store = useMetronomeStore()
		
		store.setBpm(120)
		expect(store.isValidBpm).toBe(true)
		
		store.setBpm(1)
		expect(store.isValidBpm).toBe(true)
		
		store.setBpm(200)
		expect(store.isValidBpm).toBe(true)
	})
})
