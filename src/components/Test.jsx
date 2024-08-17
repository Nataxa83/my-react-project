// export const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// };

// export const App = () => {
//     return <button onClick={() => alert("I'm a button! **")}>Click me!</button>;
// };
/////////////////

// const App = () => {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// };
/////////////////

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };
///////////////////

// import { useState } from "react";

// const App = () => {
//   //   let clicks = 0;
//   const [clicks, setClicks] = useState(5);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   //   return <button onClick={handleClick}>Current: {clicks}</button>;
//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };
///////////////

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };
////////

// const ClickCounter = () => {
//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick

const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounter;
