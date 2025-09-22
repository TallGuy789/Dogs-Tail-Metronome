# Dog's Tail

Dog's Tail is an online metronome app with some unique features. Used creatively, it will greatly improve your musicianship.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

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

### Development

Start the development server:
```sh
npm run dev
```
This will start the application at `http://localhost:3000/` with hot reloading enabled.

### Building for Production

Build the application for production:
```sh
npm run build
```
The built files will be generated in the `dist/` directory.

### Code Quality

Run ESLint to check for code quality issues:
```sh
npm run lint
```

Format code with Prettier:
```sh
npm run format
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

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
