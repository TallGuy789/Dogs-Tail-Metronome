<template>
  <v-container class="fill-height">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <!-- Status Section -->
        <v-card class="mb-4">
          <v-card-text class="text-center">
            <h2 class="text-h4 mb-2">
              {{ metronomeStore.currentTempo }}
            </h2>
            <p class="text-h6 text-medium-emphasis">
              {{ metronomeStore.statusMessage }}
            </p>
          </v-card-text>
        </v-card>

        <!-- Beat Display -->
        <v-card class="mb-4">
          <v-card-text class="text-center py-8">
            <v-row
              justify="center"
              class="mb-4"
            >
              <v-col
                v-for="beat in metronomeStore.beatCount"
                :key="beat"
                cols="auto"
              >
                <v-avatar
                  :color="metronomeStore.currentBeat === beat - 1 ? 'primary' : 'grey-lighten-2'"
                  size="24"
                  class="beat-indicator mx-1"
                  :class="{ 'beat-active': metronomeStore.currentBeat === beat - 1 }"
                >
                  {{ beat }}
                </v-avatar>
              </v-col>
            </v-row>

            <div class="text-h3 metronome-display mb-2">
              {{ metronomeStore.bpm }}
            </div>
            <div class="text-body-1 text-medium-emphasis">
              BPM
            </div>
          </v-card-text>
        </v-card>

        <!-- Start/Stop Button -->
        <v-card class="mb-4">
          <v-card-text class="text-center">
            <v-btn
              :color="metronomeStore.isPlaying ? 'error' : 'success'"
              size="x-large"
              variant="elevated"
              class="px-8 py-4"
              @click="togglePlayback"
            >
              <v-icon
                :icon="metronomeStore.isPlaying ? 'mdi-stop' : 'mdi-play'"
                class="mr-2"
              />
              {{ metronomeStore.isPlaying ? 'Stop' : 'Start' }}
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- BPM Controls -->
        <v-card class="mb-4">
          <v-card-title>Tempo Control</v-card-title>
          <v-card-text>
            <v-row
              align="center"
              class="mb-4"
            >
              <v-col cols="auto">
                <v-btn
                  icon
                  variant="outlined"
                  :disabled="metronomeStore.bpm <= 10"
                  @click="metronomeStore.decreaseBpm(10)"
                >
                  <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  icon
                  variant="outlined"
                  :disabled="metronomeStore.bpm <= 1"
                  @click="metronomeStore.decreaseBpm(1)"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-text-field
                  v-model.number="bpmInput"
                  type="number"
                  min="1"
                  max="200"
                  density="compact"
                  variant="outlined"
                  hide-details
                  @blur="updateBpm"
                  @keyup.enter="updateBpm"
                />
              </v-col>
              <v-col cols="auto">
                <v-btn
                  icon
                  variant="outlined"
                  :disabled="metronomeStore.bpm >= 200"
                  @click="metronomeStore.increaseBpm(1)"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  icon
                  variant="outlined"
                  :disabled="metronomeStore.bpm >= 190"
                  @click="metronomeStore.increaseBpm(10)"
                >
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-slider
              v-model="bpmSlider"
              min="1"
              max="200"
              step="1"
              hide-details
              @update:model-value="metronomeStore.setBpm"
            >
              <template #prepend>
                <span class="text-caption">1</span>
              </template>
              <template #append>
                <span class="text-caption">200</span>
              </template>
            </v-slider>
          </v-card-text>
        </v-card>

        <!-- Time Signature -->
        <v-card class="mb-4">
          <v-card-title>Time Signature</v-card-title>
          <v-card-text>
            <v-row align="center">
              <v-col cols="6">
                <v-select
                  v-model="metronomeStore.beatCount"
                  :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 12]"
                  label="Beats per measure"
                  density="compact"
                  variant="outlined"
                  hide-details
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="noteValue"
                  :items="[
                    { title: 'Quarter note', value: 4 },
                    { title: 'Eighth note', value: 8 },
                    { title: 'Half note', value: 2 }
                  ]"
                  label="Note value"
                  density="compact"
                  variant="outlined"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Special Modes -->
        <v-card>
          <v-card-title>Special Modes</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="metronomeStore.randomMuteEnabled"
                  label="Random Mute Mode"
                  color="primary"
                  hide-details
                />
                <v-expand-transition>
                  <div
                    v-if="metronomeStore.randomMuteEnabled"
                    class="mt-2"
                  >
                    <v-slider
                      v-model="metronomeStore.randomMutePercentage"
                      min="0"
                      max="100"
                      step="5"
                      label="Mute percentage"
                      hide-details
                      class="mb-2"
                    />
                    <v-text-field
                      v-model.number="metronomeStore.randomMuteMeasures"
                      type="number"
                      min="1"
                      max="32"
                      label="Start after measures"
                      density="compact"
                      variant="outlined"
                      hide-details
                    />
                  </div>
                </v-expand-transition>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-switch
                  v-model="metronomeStore.offBeatEnabled"
                  label="Off Beat Mode"
                  color="primary"
                  hide-details
                />
                <v-expand-transition>
                  <div
                    v-if="metronomeStore.offBeatEnabled"
                    class="mt-2"
                  >
                    <v-text-field
                      v-model.number="metronomeStore.offBeatMeasures"
                      type="number"
                      min="1"
                      max="32"
                      label="Fade in after measures"
                      density="compact"
                      variant="outlined"
                      hide-details
                    />
                  </div>
                </v-expand-transition>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useMetronomeStore } from '../stores/metronome'

export default {
	name: 'MainView',
	setup() {
		const metronomeStore = useMetronomeStore()
		const noteValue = ref(4)

		// Local reactive values for inputs
		const bpmInput = ref(metronomeStore.bpm)
		const bpmSlider = computed({
			get: () => metronomeStore.bpm,
			set: (value) => metronomeStore.setBpm(value)
		})

		// Watch store bpm changes to update input
		watch(() => metronomeStore.bpm, (newBpm) => {
			bpmInput.value = newBpm
		})

		const updateBpm = () => {
			const newBpm = parseInt(bpmInput.value)
			if (!isNaN(newBpm)) {
				metronomeStore.setBpm(newBpm)
			} else {
				bpmInput.value = metronomeStore.bpm
			}
		}

		const togglePlayback = () => {
			metronomeStore.togglePlayback()
			// TODO: Implement actual audio playback logic
		}

		return {
			metronomeStore,
			bpmInput,
			bpmSlider,
			noteValue,
			updateBpm,
			togglePlayback
		}
	}
}
</script>

<style scoped>
.beat-indicator {
	transition: all 0.15s ease-in-out;
}

.beat-active {
	transform: scale(1.2);
}

.metronome-display {
	font-family: 'Roboto Mono', monospace;
	font-weight: bold;
	letter-spacing: 2px;
}
</style>
