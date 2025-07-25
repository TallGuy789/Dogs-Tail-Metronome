import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create test utilities
const createVuetifyInstance = () => createVuetify({
	components,
	directives
})

const createWrapper = (component, options = {}) => {
	const vuetify = createVuetifyInstance()
	const pinia = createPinia()

	return mount(component, {
		global: {
			plugins: [vuetify, pinia]
		},
		...options
	})
}

describe('Test Setup', () => {
	it('should have working test environment', () => {
		expect(true).toBe(true)
	})
})

export { createWrapper }
