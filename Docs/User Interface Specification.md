# User Interface Specification

## Application Structure

The application consists of three main pages:
1. **Main Page** - Contains the metronome interface and primary controls
2. **Preferences Page** - Contains user preference options
2. **About Page** - Contains information about the application

---

## Main Page Components

### Header Section

**Application Title**
Displayed at the top of the page. Has the text "Dog's Tail".

**Toolbar Row**
Type is UI row. Displayed below the **Application Title**.

**Preferences Toolbar Button**
Type is Toolbar Button. Icon is a cog. Contained in the **Toolbar Row**. Selecting the button opens the **Preferences Section**.

**About Toolbar Button**
Type is Toolbar Button. Icon is an explanation mark with a circle around it. Contained in the **Toolbar Row**. Selecting the button opens the **About Section**.

---

### Primary Controls Section

#### Row Start Stop

**Start/Stop Button**
Large, prominent button to start or stop the metronome. Changes label and visual state based on current playback status.

**Status Label**
A readonly label that displays various status updates.

#### Row BPM 1

**Fast Decrease Button**
Decreases BPM by 10.

**Decrease Button**
Decreases BPM by 1.

**BPM Numeric Input**
Number input field allowing direct entry of BPM values (1 - 200).

**Increase Button**
Increases BPM by 1.

**Fast Increase Button**
Increases BPM by 10.

**Tap Tempo Button**
Button for setting BPM by tapping rhythm. Calculates and sets BPM based on tap intervals.

#### Row BPM 2

**BPM Numeric Input**
Numeric input for BPM (1 - 200, default: 80). Value is linked to the **BPM Slider**.

**BPM Slider**
Slider control for quick BPM adjustment (1 - 200, default: 80). Value is linked to the **BPM Numeric Input**.

#### Row Misc

**Beats Per Measure Numeric Input**
Numeric input for beats per measure (1 - 24, default: 4).

**Subdivisions Numeric Input**
Numeric input for number of subdivisions per beat (0 - 24, default: 0).

**Accent First Beat Toggle**
Checkbox or toggle switch to enable/disable accenting the first beat (default: true).

#### Row Master Volume

**Master Volume Numeric Input**
Number input field allowing direct entry of overall volume (0% - 100%, default: 100%). Value is linked to the **Master Volume Control**.

**Master Volume Slider**
Slider control for overall volume (0% - 100%, default: 100%). Value is linked to the **Master Volume Numeric Input**.

---

### Advanced Features Section

#### Random Beat Mute Group

**Random Beat Mute Toggle**
Toggle to enable Random Beat Muting mode. Default is off. Label is 'Random Beat Mute'.

**Mute Percentage Slider**
Sets percentage of beats to mute (0-100%, default 30%). Hidden when Random Beat Mute is off.

**Mute Delay Numeric Input**
Number of measures before muting starts (0-20, default 3). Hidden when Random Beat Mute is off.

#### Off Beat Group

**Off Beat Toggle**
Toggle to enable Off Beat mode.

**Off Beat Type Selector**
Selector with options: '1/4', '2/4' (default), '3/4', '1/3', '2/3'. Hidden when Off Beat is off.

**Off Beat Delay Numeric Input**
Number of measures before fade-in starts (0-20, default 3). Hidden when Off Beat is off.

#### Background Colour Cycling Group

**Background Colour Cycling Selector**
Selector for background colour sequence options that cycle with each beat. Options are "Cycle: Black, White" (default), "Cycle: Black, Grey, White, Grey", "Cycle: Red, Green, Blue", "Cycle: Red, Yellow, Green, Purple, Orange, Blue", "Pulse: Black", "Pulse: White", "Pulse: Black, White", "Pulse: Black, Grey, White, Grey", "Pulse: Red, Green, Blue", "Pulse: Red, Yellow, Green, Purple, Orange, Blue".

#### Copy Paste Settings Group

**Copy Settings Button**
Copies the current settings into the clipboard. Label is 'Copy Settings'. Hidden when resolution indicates a mobile device.

**Copy Settings Button**
Reads the clipboard and, if valid, updates the current settings. Label is 'Paste Settings'. Hidden when resolution indicates a mobile device.

---

## Preferences Section Components

### Audio Configuration Section

**Accent Beat Settings**
- **Pitch Input** - Frequency in Hz for accent beats
- **Duration Input** - Duration in milliseconds for accent beats
- **Volume Input** - Volume in percentage for accent beats

**Main Beat Settings**
- **Pitch Input** - Frequency in Hz for main beats
- **Duration Input** - Duration in milliseconds for main beats
- **Volume Input** - Volume in percentage for main beats

**Subdivision Beat Settings**
- **Pitch Input** - Frequency in Hz for subdivision beats
- **Duration Input** - Duration in milliseconds for subdivision beats
- **Volume Input** - Volume in percentage subdivision beats

### Application Settings Section

**Copy/Paste Type Selector**
Configuration options for copy/paste functionality behaviors. Options are "Code Only" (default), "Code + short human label", "Code + full human label".

**Navigation Controls**
Button or link to return to the Main Page.

---

## About Section Components

### Dedication Section

Text that dedicates the application to Hugo. Hugo was a yellow Labrador. His full name was "Baron Hugo von Metronome". There is a photo of Hugo.

### Practice Section

Text that describes tips and techniques for using the metronome to improve musical skills.

### Tools and libraries Section

Text that describes the tools and libraries used to build the application.

---

## Common Components

**Main Content Area**
Primary area where the application's main content is displayed. Contains either the Main Page or Settings Page content.

**Footer**
Displays copyright and licence.

---

## Visual States & Feedback

**Active/Playing State**
Visual indicators when metronome is running:
- Start/Stop button shows "Stop" state
- Beat visualization or pulsing effects
- Background color cycling (if enabled)

**Muted Beat Indicators**
Visual feedback when random beat mute is active showing which beats are muted.

**Off Beat Visual Feedback**
Visual indicators during off beat mode transitions and TTS playback.

---

## Notes

- All controls should be accessible and keyboard-navigable
- Icons should be consistent and follow the chosen design system
- Mobile-first, responsive layout for desktop and mobile devices
- Real-time updates: Any setting can be changed while metronome is running
- All settings automatically saved to browser local storage
- Progressive Web App capabilities for offline use and mobile installation
