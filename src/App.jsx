import { LoginForm } from "./LoginForm/LoginForm";

// export default function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }
////////

// export default function App() {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// }

// import { SearchBar } from "./components/SearchBar/SearchBar";
// import { LangSwitcher } from "./components/SearchBar/SearchBar";
import { useState } from "react";

// export default function App() {
//   const [lang, setLang] = useState("uk");
//   return (
//     <>
//       {/* <SearchBar /> */}
//       {/* <p>Selected language: </p>
//       <LangSwitcher /> */}
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// }

// export default function App() {
//   const [coffeeSize, setCoffeeSize] = useState("sm");
//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input type="radio" name="coffeeSize" value="sm" />
//         Small
//       </label>
//       <label>
//         <input type="radio" name="coffeeSize" value="md" />
//         Meduim
//       </label>
//       <label>
//         <input type="radio" name="coffeeSize" value="lg" />
//         Large
//       </label>
//     </>
//   );
// }

// export default function App() {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//         />
//         Large
//       </label>
//     </>
//   );
// }

// export default function App() {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p>
//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
//   );

// }
///////////////

// const App = () => {
//   return (
//     <div>
//       <label>
//         <input type="checkbox" name="terms" />I accept terms and conditions
//       </label>
//       <button type="button">Proceed</button>
//     </div>
//   );
// };

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";

const App = () => {
  return <FeedbackForm />;
};

export default App;
