# Pokémon Card App

<div align="center">

![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?style=flat-square\&logo=react)
![Expo](https://img.shields.io/badge/Expo-54.0.33-black?style=flat-square\&logo=expo)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square\&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

A beautiful and interactive Pokémon Card application built with React Native and Expo, showcasing fundamental mobile app development concepts.

</div>

---

## 📱 Demo

### iOS (iPhone 11)

<img src="./assets/gif/ios.gif" width="250" height="500" alt="iOS Demo" />

### Android (Pixel)

<img src="./assets/gif/android.gif" width="250" height="500" alt="Android Demo" />

---

## 🧪 Testing Devices

| Device           | Specifications   | Status   |
| ---------------- | ---------------- | -------- |
| **iPhone 11**    | 326 PPI, 326×812 | ✅ Tested |
| **Pixel 4 / 4a** | 441 PPI, 412×915 | ✅ Tested |

---

## 🚀 Features

* 📇 **Dynamic Pokémon Cards** – Display Pokémon with individual stats and abilities
* 🎨 **Type-based Styling** – Different visual styles based on Pokémon type (Fire, Water, Grass, Electric)
* 📊 **Detailed Information** – Show HP, moves, weaknesses, and type indicators
* 🔄 **Scrollable List** – Smooth scrolling through multiple Pokémon cards
* 📱 **Responsive Design** – Adapts to different screen sizes and orientations
* 🌐 **Cross-platform** – Works on iOS, Android, and Web

---

## 📚 Learning Outcomes

### Core React Native Concepts Mastered

#### 1. Component Architecture

* Created reusable `PokemonCard` component.
* Implemented props-based data passing for dynamic content.
* Built functional components with proper prop destructuring.

#### 2. Styling & Layout

* Used **StyleSheet API** via `StyleSheet.create()`
* Mastered **Flexbox layout**:

  * `flexDirection`
  * `justifyContent`
  * `alignItems`
  * spacing with padding and margin
* Platform-specific styling with `Platform.select()`:

  * iOS shadows (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`)
  * Android shadow via `elevation`

#### 3. Image Handling

* Imported images using `require()`
* Controlled sizing with `resizeMode: "contain"`
* Added `accessibilityLabel` for accessibility

#### 4. Data Management

* Created structured Pokémon data objects
* Managed arrays, strings, and numbers
* Rendered data dynamically using props

#### 5. Conditional Styling

* Implemented `getTypeDetails()` function
* Applied dynamic colors and emojis based on Pokémon type
* Used switch statements for conditional logic

#### 6. UI Components

* `Text` – Display Pokémon details
* `View` – Layout and containers
* `Image` – Pokémon visuals
* `ScrollView` – Scrollable card list
* `SafeAreaView` – Notch-safe layout handling

#### 7. Responsive Design

* Fixed dimensions with responsive layout logic
* Platform-aware adjustments
* Tested across multiple screen sizes

#### 8. Best Practices

* Component reusability and composition
* Proper prop destructuring
* Clean, readable code structure
* Meaningful naming conventions
* Accessibility-first mindset

---

## 🛠️ Tech Stack

| Technology           | Version  | Purpose                  |
| -------------------- | -------- | ------------------------ |
| **React Native**     | 0.81.5   | Mobile framework         |
| **Expo**             | ~54.0.33 | Development & deployment |
| **JavaScript (ES6)** | Latest   | Programming language     |
| **Node.js**          | LTS      | Package management       |

---

## 📦 Project Structure

```
pokemon-card/
├── components/
│   └── PokemonCard.js        # Main Pokémon card component
├── assets/
│   ├── gif/
│   │   ├── ios.gif           # iOS demo video
│   │   └── android.gif       # Android demo video
│   ├── charmander.png
│   ├── squirtle.png
│   ├── bulbasaur.png
│   ├── pikachu.png
│   ├── icon.png              # App icon
│   ├── adaptive-icon.png
│   ├── splash-icon.png
│   └── favicon.png
├── App.js                    # Main app component
├── index.js                  # Entry point
├── app.json                  # Expo configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## ⚙️ Prerequisites

* Node.js (v16 or higher)
* npm or yarn
* Expo CLI

  ```bash
  npm install -g expo-cli
  ```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd pokemon-card
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Run on your device

* **iOS**: Press `i` in terminal or scan QR with Camera app
* **Android**: Press `a` or scan QR with Expo Go
* **Web**: Press `w`

---

## 🎯 Available Scripts

```bash
npm start          # Start Expo development server
npm run ios        # iOS simulator (macOS only)
npm run android    # Android emulator
npm run web        # Web browser
npm run eject      # Eject from Expo
npm start -- --clear  # Clear cache and rebuild
```

---

## 🧩 Component Details

### PokemonCard Component

Displays individual Pokémon information with type-based styling.

#### Component Usage

```jsx
<PokemonCard
  name="Pikachu"
  image={require('./assets/pikachu.png')}
  type="Electric"
  hp={35}
  moves={['Quick Attack', 'Thunderbolt']}
  weaknesses={['Ground']}
/>
```

---

### Props Documentation

| Prop         | Type    | Description   | Example                           |
| ------------ | ------- | ------------- | --------------------------------- |
| `name`       | string  | Pokémon name  | `"Pikachu"`                       |
| `image`      | require | Image path    | `require('./assets/pikachu.png')` |
| `type`       | string  | Pokémon type  | `"Electric"`                      |
| `hp`         | number  | Health points | `35`                              |
| `moves`      | array   | Pokémon moves | `['Quick Attack', 'Thunderbolt']` |
| `weaknesses` | array   | Weak types    | `['Ground']`                      |

---

### Component Features

* Automatic type-based color styling
* Dynamic emoji rendering by type
* Responsive card layout
* Platform-specific shadow effects
* Accessible design with labels

---

## 🎨 Styling Features

### Type-based Color System

| Type       | Color     |
| ---------- | --------- |
| ⚡ Electric | `#FFD700` |
| 💧 Water   | `#6493EA` |
| 🔥 Fire    | `#FF5733` |
| 🌿 Grass   | `#66CC66` |

### Platform-specific Shadow Effects

**iOS**

```js
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
```

**Android**

```js
elevation: 5,
```

### Responsive Spacing

* Padding: 15–25
* Margin: consistent spacing
* Border radius: 12–15

---

## 💡 Key Learning Points

1. Props & Component Reusability
2. Flexbox Layout Mastery
3. Platform Differences
4. Data Structure Organization
5. Conditional Styling Logic
6. Safe Area Handling
7. ScrollView Performance
8. Image Management
9. Accessibility
10. Mobile App Development Fundamentals

---

## 🔄 Future Enhancements

* Navigation (React Navigation)
* Search & Filter
* Favorites with AsyncStorage
* Animations (Reanimated)
* PokéAPI integration
* Dark Mode
* Localization (i18n)
* Testing (Jest)
* Performance optimizations
* State management (Context / Redux)

---

## 🐛 Troubleshooting

### Expo app not loading

```bash
npm start -- --clear
```

### Image not displaying

* Check `require()` path
* Verify file exists
* Confirm supported format

### Styles not applying

* Use `StyleSheet.create()`
* Check property names
* Verify Flexbox layout

### App crashing

* Test on multiple devices
* Check OS compatibility
* Review console logs

---

## 📄 License

MIT License – free to use, modify, and distribute.

---

## 👨‍💻 Author

Built as a comprehensive learning project for React Native fundamentals and cross-platform mobile development.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push branch
5. Open Pull Request

---

## 📞 Support

* Open a GitHub issue
* Check existing solutions
* Provide detailed reproduction steps

---

## 🔗 Useful Resources

* React Native Documentation
* Expo Documentation
* React Native Style Reference
* PokéAPI Documentation
* Flexbox Guide

---

<div align="center">

Happy Coding! 🎉
Made with ❤️ using React Native & Expo
Built on February 6, 2026

</div>
