// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Button = styled.button`
//   background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
//   color: ${props => (props.isDarkMode ? 'white' : 'black')};
//   border: 2px solid ${props => (props.isDarkMode ? 'white' : 'black')};
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     background-color: ${props => (props.isDarkMode ? 'white' : 'black')};
//     color: ${props => (props.isDarkMode ? 'black' : 'white')};
//   }
// `;

// function LightDarkModeButton() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//     // You can add logic to toggle your app's theme here
//   };

//   return (
//     <Button onClick={toggleMode} isDarkMode={isDarkMode}>
//       {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     </Button>
//   );
// }

// export default LightDarkModeButton;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? "black" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  border: 2px solid ${(props) => (props.isDarkMode ? "white" : "black")};
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? "white" : "black")};
    color: ${(props) => (props.isDarkMode ? "black" : "white")};
  }
`;

function LightDarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    // You can add logic to toggle your app's theme here
  };

  return (
    <button onClick={toggleMode}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default LightDarkModeButton;
