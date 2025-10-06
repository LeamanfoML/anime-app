# Anime App

A mobile web application for discovering and exploring anime. This app is designed to work as a Progressive Web App (PWA) and can also be built as a native Android application using Cordova.

## Features

- Browse popular anime titles
- Search functionality
- Mobile-friendly interface with swipe gestures
- Rating system
- Favorites functionality (planned)
- Offline capability (PWA)

## Technology Stack

- HTML5
- CSS3 (with mobile-first approach)
- JavaScript (ES6+)
- Cordova for native app build
- Progressive Web App (PWA) capabilities

## File Structure

```
├── index.html           # Main application page
├── css/
│   └── style.css       # Mobile-optimized styles
├── js/
│   └── app.js          # Application logic
├── assets/             # Images and icons
├── images/             # Placeholder images
├── manifest.json       # PWA configuration
├── config.xml          # Cordova configuration
└── README.md
```

## Installation and Usage

### As a Web Application

1. Clone the repository:
```bash
git clone https://github.com/your-username/anime-app.git
```

2. Navigate to the project directory:
```bash
cd anime-app
```

3. Start a local server:
```bash
python3 -m http.server 8080
```

4. Open your browser and go to `http://localhost:8080`

### As a Progressive Web App (PWA)

1. Open the app in a mobile browser (Chrome, Firefox, Edge)
2. Tap the "Add to Home Screen" option in the browser menu
3. The app will be installed on your device like a native app

### Building Native APK

For building the native Android APK:

1. Install Node.js and Cordova:
```bash
npm install -g cordova
```

2. Add the Android platform:
```bash
cordova platform add android
```

3. Install required plugins:
```bash
cordova plugin add cordova-plugin-whitelist
```

4. Build the app:
```bash
cordova build android
```

The APK will be generated in `platforms/android/app/build/outputs/apk/`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT