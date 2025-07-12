# Dog's Tail

Dog's Tail is an online metronome app with some unique features. Used creatively, it will greatly improve your musicianship.

## Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd DogsTail
   ```
3. Follow the setup instructions (to be added).

## Primary Application Features
- [ ] There is a start / stop button to start the beats or to stop them.
- [ ] Any option can be changed while the metronome is running. It will adjust accordingly.
- [ ] Beats Per Minute (BPM) can be specified from 1 to 200.
  - [ ] There will be a numeric input. The user can enter a value directly.
  - [ ] In mobile mode only, there will be a fast increase button that increases the current BPM by 10.
  - [ ] In mobile mode only, there will be a increase button that increases the current BPM by 1.
  - [ ] In mobile mode only, there will be a decrease button that decreases the current BPM by 1.
  - [ ] In mobile mode only, there will be a fast decrease button that decreases the current BPM by 10.
  - [ ] There will be a slider that allows the user to quickly adjust the BPM.
  - [ ] The slider and the numeric input are linked - changing one changes the other.
- [ ] The number of beats per measure can be specified between 1 and 24. The default is 4.
- [ ] There is a 'Random Beat Mute' option. The default is off.
  - [ ] The user can specify what percentage (0% to 100%) of beats to randomly mute.
  - [ ] The user can specify how many measures (0 to 20) elapse before the random mutes start.
  - [ ] When the 'Random Beat Mute' is on, the current percentage is displayed.

## Secondary Application Features
- [ ] There is a master volume control.
- [ ] There is an option to accent the first beat. The default is true.
- [ ] There is a dropdown option to cycle the background colour through various colour sequences with each beat.
- [ ] There is an 'Advanced Options' page.
  - [ ] The pitch (in Hz) and duration (in milliseconds) for the accent beat can be set.
  - [ ] The pitch (in Hz) and duration (in milliseconds) for the main beat can be set.
  - [ ] The pitch (in Hz) and duration (in milliseconds) for the subdivision beat can be set.
- [ ] There is a Tap button that can be used to set the BPM.
- [ ] There is a 'Off Beat' option. Default is off.
  - [ ] When the 'Off Beat' option is on, the metronome will start by speaking the 'on beat' using TTS. It will then fade in the 'off beat' tick. It will then fade out the speaking 'on beat'.
  - [ ] There is option to set which off beat the metronome will use. The options are '1/4', '2/4', '3/4', '1/3', '2/3'.
  - [ ] The user can specify how many measures (0 to 20) elapse before the fade in of the 'off beat' tick.

## Technical Features
- [ ] Progressive Web App that will run on desktop and Android devices.
- [ ] Exactly the same build will be used for desktop and mobile devices.
- [ ] All settings are stored in the browser's local storage and read when the application first starts.
- [ ] Mobile first, responsive layout.
- [ ] There will be unit tests.
- [ ] There will be linting to ensure consistent formatting.
- [ ] There will be an editor config file to ensure consistent formatting. Tabs will be used to indent.
- [ ] Fully automated CI/CD pipeline. Linting and tests are checked.

## Technical Details

- **Hosting:** Azure as a Static Web App.
- **Project:** Azure DevOps.
- **CI/CD:** Azure DevOps.
- **Code Repo:** Azure DevOps.
- **Frameworks:** Vue.js
- **Languages:** JavaScript

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements.

## License


This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
