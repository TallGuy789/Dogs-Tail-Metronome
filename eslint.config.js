import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
	js.configs.recommended,
	...vue.configs['flat/recommended'],
	{
		rules: {
			// Vue specific rules
			'vue/multi-word-component-names': 'off',
			'vue/no-reserved-component-names': 'off',

			// General JavaScript rules
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-unused-vars': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',

			// Code style
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single'],
			'semi': ['error', 'never']
		},
		languageOptions: {
			globals: {
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				localStorage: 'readonly',
				console: 'readonly',
				process: 'readonly',
				URL: 'readonly',
				Blob: 'readonly'
			}
		}
	},
	{
		files: ['**/*.test.js', '**/*.spec.js'],
		languageOptions: {
			globals: {
				describe: 'readonly',
				it: 'readonly',
				expect: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				vi: 'readonly'
			}
		}
	}
]
