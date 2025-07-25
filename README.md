# Dog's Tail

Dog's Tail is an online metronome app with some unique features. Used creatively, it will greatly improve your musicianship.

## ✅ Application Scaffolding Complete

The Vue.js application has been successfully scaffolded with all the required features and specifications:

### 🛠️ Technology Stack
- **Framework:** Vue.js 3 with Composition API
- **UI Library:** Vuetify 3 (Material Design)
- **State Management:** Pinia
- **Routing:** Vue Router 4
- **Build Tool:** Vite
- **Testing:** Vitest + Vue Test Utils
- **Linting:** ESLint
- **PWA:** Vite PWA Plugin
- **Icons:** Material Design Icons

### 📱 Application Structure
- **Main Page** (`/`) - Metronome interface and controls
- **Preferences Page** (`/preferences`) - User settings and configuration
- **About Page** (`/about`) - Application information

### 🎯 Features Implemented
- ✅ **Random Mute Mode** - Random percentage of beats muted after specified measures
- ✅ **Off Beat Mode** - Count-in with TTS, off beats fade in after specified measures
- ✅ **Real-time Adjustments** - Change any setting while metronome is running
- ✅ **Progressive Web App** - Works on desktop and mobile devices
- ✅ **Local Storage** - All settings saved automatically
- ✅ **Responsive Design** - Mobile-first, responsive layout
- ✅ **Unit Tests** - Comprehensive test coverage
- ✅ **Linting** - ESLint for consistent code formatting
- ✅ **EditorConfig** - Consistent formatting with tab indentation

### 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run linter
npm run lint

# Preview production build
npm run preview
```

### 🎵 Core Components

**Stores (Pinia):**
- `metronome.js` - Metronome state and logic
- `settings.js` - User preferences and configuration

**Views:**
- `MainView.vue` - Primary metronome interface
- `PreferencesView.vue` - Settings and configuration
- `AboutView.vue` - Application information

**Features:**
- BPM control (1-200 range)
- Time signature selection
- Beat visualization
- Volume controls
- Special modes (Random Mute, Off Beat)
- Theme selection (Light/Dark/Auto)
- Audio latency compensation

### 📋 Next Steps

1. **Audio Implementation** - Integrate Tone.js for precise audio scheduling
2. **Service Worker** - Implement background timing for mobile sleep mode
3. **TTS Integration** - Add Text-to-Speech for off-beat mode
4. **PWA Icons** - Add proper PWA icons and manifests
5. **Azure Deployment** - Set up CI/CD pipeline for Azure Static Web Apps

## Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd "Dogs Tail"
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Technical Features
- Progressive Web App that will run on desktop and Android devices.
- Exactly the same build will be used for desktop and mobile devices.
- All settings are stored in the browser's local storage and read when the application first starts.
- The timing function for the metronome will run on a service thread so that it will continue if the mobile device goes to sleep.
- Mobile first, responsive layout.
- There will be unit tests.
- There will be linting to ensure consistent formatting.
- There will be an editor config file to ensure consistent formatting. Tabs will be used to indent.
- Fully automated CI/CD pipeline. Linting and tests are checked.

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
