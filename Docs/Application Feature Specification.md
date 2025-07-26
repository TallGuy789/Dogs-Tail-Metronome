# Application Features Specification

## Metronome Mode

- The **Start/Stop Button** control will toggle **Metronome Mode** between start or stop.
- If **Accent First Beat Mode** is enabled, each measure will consist of:
  - 1 accent beat. The tone is defined by the **Accent First Beat Settings** in the **Audio Configuration Section**.
  - Main beat(s). There will be **Beats Per Measure** - 1 beats. The tone is defined by the **Main Beat Settings** in the **Audio Configuration Section**.
- If **Accent First Beat Mode** is disabled, each measure will consist of:
  - Main beat(s). There will be **Beats Per Measure** beats. The tone is defined by the **Main Beat Settings** in the **Audio Configuration Section**.
- The time between each beat will be 60 / **Beats Per Minute** in seconds.
- Great care will be taken to ensure accurate timing.

## Random Beat Mute Mode

- When enabled, a random percentage of beats to be muted after a specified number of measures.
- The **Random Beat Mute Toggle** control will toggle **Random Beat Mute Mode** between enabled or disabled.
- The **Mute Percentage Slider** control will determine what percentage of beats are muted.
- The **Mute Delay Numeric Input** control will determine the number of measures before muting starts.
- When enabled and the metronome is started, no beats will be muted initially. After the number of measures specified by the **Mute Delay Numeric Input** control have passed, the random muting of beats will start.
- Once random muting of beats has started, before each beat is played,
  - A random number is generated.
  - If the random number is less than the **Mute Percentage**, the beat is muted.
  - If the beat is muted, no sound for it is generated.
  - If the beat is not muted, it is sounded as normal.
- The muting will continue until the metronome is stopped or **Random Beat Mute Mode** is disabled.

## Off Beat Mode

An **On Beat** is:
- A spoken beat using TTS.
- The utterances is the number of the beat in the measure. For example, if there are 4 beats per measure, the utterances for each beat in the measure will be, "1", "2", "3", "4".
- The timing for the **On Beat** is exactly the same as the normal metronome operation.

An **Off Beat** is:
- A tone beat. The tone is defined by the **Main Beat Settings** in the **Audio Configuration Section**.
- The **Off Beat** is played between two **On Beats**.
- The timing for the **Off Beat** is determined by the **Off Beat Type Selector**. Each selection will be mapped to a percentage of time between the two **On Beats**.

| Off Beat Type Selector Option | Percentage of Time Between On Beats |
|------------------------------|-------------------------------------|
| 1/4                          | 25.0%                               |
| 2/4 (default)                | 50.0%                               |
| 3/4                          | 75.0%                               |
| 1/3                          | 33.33333%                           |
| 2/3                          | 66.66666%                           |

- The **Off Beat Toggle** control will toggle **Off Beat Mode** between enabled or disabled.
- When enabled, the metronome will start by sounding the **On Beats** only.
- After the number of measures specified by the **Off Beat Delay Numeric Input** control have passed, the **Off Beats** will also sound.
- After the number of measures specified by the **Off Beat Delay Numeric Input** control have passed again, the **On Beats** will stop.
- This will continue until the metronome is stopped.

## Tap Tempo

- When the **Tap Tempo Button** is first clicked, the **Tap Tempo Mode** is enabled.
- If the **Tap Tempo Button** is not pressed again within 3 seconds, **Tap Tempo Mode** is disabled and no change is made to **Beats Per Minute**.
- Subsequent **Tap Tempo Button** clicks will cause the **Beats Per Minute** to be recalculated:
  - **Click Duration** will be calculated, in seconds, using a sliding, weighted average amount of duration between **Tap Tempo Button** clicks.
  - **Beats Per Minute** will be set to 60 / **Click Duration**.
- **Tap Tempo Mode** will be disable when the **Tap Tempo Button** has not been clicked for 3 seconds.
