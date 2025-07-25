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
            Preferences
          </v-card-title>
        </v-card>

        <!-- Visual Preferences -->
        <v-card class="mb-4">
          <v-card-title>Visual</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="settingsStore.theme"
                  :items="themeOptions"
                  label="Theme"
                  variant="outlined"
                  density="compact"
                  hide-details
                  @update:model-value="settingsStore.updateTheme"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="settingsStore.colorScheme"
                  :items="colorSchemeOptions"
                  label="Color Scheme"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col cols="12">
                <v-switch
                  v-model="settingsStore.visualFeedback"
                  label="Visual Beat Feedback"
                  color="primary"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Audio Preferences -->
        <v-card class="mb-4">
          <v-card-title>Audio</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="settingsStore.clickSoundType"
                  :items="soundOptions"
                  label="Click Sound"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model.number="settingsStore.audioLatency"
                  type="number"
                  min="-100"
                  max="100"
                  step="1"
                  label="Audio Latency (ms)"
                  variant="outlined"
                  density="compact"
                  hide-details
                  suffix="ms"
                />
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col
                cols="12"
                md="6"
              >
                <v-slider
                  v-model="settingsStore.globalVolume"
                  min="0"
                  max="100"
                  step="1"
                  label="Global Volume"
                  hide-details
                  @update:model-value="settingsStore.updateVolume"
                >
                  <template #append>
                    <v-text-field
                      v-model.number="settingsStore.globalVolume"
                      type="number"
                      style="width: 60px"
                      density="compact"
                      variant="outlined"
                      hide-details
                      suffix="%"
                    />
                  </template>
                </v-slider>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-slider
                  v-model="settingsStore.accentVolume"
                  min="0"
                  max="100"
                  step="1"
                  label="Accent Volume"
                  hide-details
                >
                  <template #append>
                    <v-text-field
                      v-model.number="settingsStore.accentVolume"
                      type="number"
                      style="width: 60px"
                      density="compact"
                      variant="outlined"
                      hide-details
                      suffix="%"
                    />
                  </template>
                </v-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Behavior Preferences -->
        <v-card class="mb-4">
          <v-card-title>Behavior</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="settingsStore.startOnLoad"
                  label="Start metronome on app load"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="settingsStore.saveLastBpm"
                  label="Remember last BPM"
                  color="primary"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="settingsStore.keepScreenOn"
                  label="Keep screen on while running"
                  color="primary"
                  hide-details
                  @update:model-value="settingsStore.toggleKeepScreenOn"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="settingsStore.vibration"
                  label="Vibration (mobile)"
                  color="primary"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Actions -->
        <v-card>
          <v-card-title>Settings</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-btn
                  color="warning"
                  variant="outlined"
                  block
                  @click="resetDialog = true"
                >
                  <v-icon class="mr-2">
                    mdi-restore
                  </v-icon>
                  Reset to Defaults
                </v-btn>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-btn
                  color="success"
                  variant="outlined"
                  block
                  @click="exportSettings"
                >
                  <v-icon class="mr-2">
                    mdi-download
                  </v-icon>
                  Export Settings
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Reset Confirmation Dialog -->
    <v-dialog
      v-model="resetDialog"
      max-width="400"
    >
      <v-card>
        <v-card-title>Reset Settings</v-card-title>
        <v-card-text>
          Are you sure you want to reset all settings to their default values? This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="grey"
            variant="text"
            @click="resetDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="warning"
            variant="text"
            @click="confirmReset"
          >
            Reset
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar for feedback -->
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="success"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useSettingsStore } from '../stores/settings'

export default {
	name: 'PreferencesView',
	setup() {
		const settingsStore = useSettingsStore()
		const resetDialog = ref(false)
		const snackbar = ref(false)
		const snackbarText = ref('')

		const themeOptions = [
			{ title: 'Light', value: 'light' },
			{ title: 'Dark', value: 'dark' },
			{ title: 'Auto (System)', value: 'auto' }
		]

		const colorSchemeOptions = [
			{ title: 'Blue', value: 'blue' },
			{ title: 'Purple', value: 'purple' },
			{ title: 'Green', value: 'green' },
			{ title: 'Orange', value: 'orange' },
			{ title: 'Red', value: 'red' }
		]

		const soundOptions = [
			{ title: 'Default Click', value: 'default' },
			{ title: 'Wood Block', value: 'wood' },
			{ title: 'Metal Click', value: 'metal' },
			{ title: 'Electronic Beep', value: 'beep' }
		]

		const confirmReset = () => {
			settingsStore.resetToDefaults()
			resetDialog.value = false
			showSnackbar('Settings reset to defaults')
		}

		const exportSettings = () => {
			try {
				const settings = JSON.stringify(settingsStore.$state, null, 2)
				const blob = new Blob([settings], { type: 'application/json' })
				const url = URL.createObjectURL(blob)
				const a = document.createElement('a')
				a.href = url
				a.download = 'dogs-tail-settings.json'
				a.click()
				URL.revokeObjectURL(url)
				showSnackbar('Settings exported successfully')
			} catch (error) {
				console.error('Failed to export settings:', error)
				showSnackbar('Failed to export settings')
			}
		}

		const showSnackbar = (text) => {
			snackbarText.value = text
			snackbar.value = true
		}

		return {
			settingsStore,
			resetDialog,
			snackbar,
			snackbarText,
			themeOptions,
			colorSchemeOptions,
			soundOptions,
			confirmReset,
			exportSettings
		}
	}
}
</script>
