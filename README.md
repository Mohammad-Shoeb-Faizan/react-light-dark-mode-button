# React Light and Dark Mode Button

A stylish and customizable React library for implementing light and dark mode toggles with a button.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the `react-light-dark-mode-button` library with your favorite package manager.

Using npm:

```bash
npm install react-light-dark-mode-button
```

Using yarn:

```bash
yarn add react-light-dark-mode-button
```

Using bun:

```bash
bun install react-light-dark-mode-button
```

## Usage

To use the light and dark mode button in your React application, follow these steps:

1. Import the `LightDarkModeButton` component into your application:

   ```jsx
   import React from "react";
   import LightDarkModeButton from "react-light-dark-mode-button";
   ```

2. Use the `LightDarkModeButton` component within your React component:

   ```jsx
   function App() {
     return (
       <div>
         <h1>Your App Title</h1>
         <LightDarkModeButton />
       </div>
     );
   }
   ```

3. Customize the behavior of your application's light and dark modes by adding logic to the `toggleMode` function within the `LightDarkModeButton` component.

## Customization

You can customize the appearance and behavior of the light and dark mode button by modifying the `LightDarkModeButton` component in your project. The component uses local storage to save the user's preferred theme.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
