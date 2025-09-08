First Mobile Application with Expo Router
Objective

Set up and run the first mobile application using the Expo Router template, then understand the scaffolding process and file structure of a React Native application with Expo.

Steps Followed
1. Navigate to the Project Directory
cd prodev-mobile-setup
2. Initialize the Expo Router Project

Created a new Expo project with the latest Expo Router template:
npx create-expo-app@latest .
This generated the necessary scaffolding for a React Native application, including:

app/ → Main directory containing routes and screens.

app/(tabs)/index.tsx → Default home screen under a tab navigation structure.

package.json → Project dependencies and scripts.

babel.config.js & tsconfig.json → Configuration for TypeScript and Babel.

3. Modify the Home Screen

Opened: app/(tabs)/index.tsx

Replaced the default text:
<Text>Welcome!</Text>
with
<Text>First App Created</Text>


4. Run and Test the Application

Started the development server with:
npx expo start

iOS Devices → Opened the Camera app and scanned the QR code displayed in the terminal.

Android Devices → Opened the Expo Go app and scanned the QR code.

✅ Result: The modified text "First App Created" displayed on the home screen.

5. Reset the Application

Executed:
npm run reset-project
Observation:

The reset command cleared cached files and reset the development environment.

Dependencies were reinstalled, simulating a "fresh install" state.

Custom changes (like "First App Created") remained intact since reset does not delete source code—it only refreshes dependencies and environment setup.

Conclusion

Successfully scaffolded and ran a React Native application with Expo Router.

Verified application updates by modifying the default home screen text.

Observed that npm run reset-project clears cached data and reinstalls dependencies, but keeps source code unchanged.