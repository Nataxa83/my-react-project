// import React from "react";
// import ReactDOM from "react-dom/client";

// import "modern-normalize";
//   // import App from './components/App'

//   // import { App } from './components/App'
//   // import { Alert } from './components/Alert'

//   // import App from ".components/Test";
// import App from "./App";
//   // import App1 from "./App";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// src/main.jsx
import ReactDOM from "react-dom/client";
import { userContext } from "./useContext";
import App from "./App";
import { UserProvider } from "./components/userContext";
const contextValue = {
  username: "Mango",
  isLoggedIn: true,
};

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <userContext.Provider value={contextValue}>
//     <App />
//   </userContext.Provider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
