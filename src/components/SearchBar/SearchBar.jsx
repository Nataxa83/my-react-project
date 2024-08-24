import { useState } from "react";
import { useId } from "react";

// export const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("ssc");

//   return (
//     <div>
//       <input type="text" />
//       <p>{inputValue}hbhh</p>
//     </div>
//   );
// };

////

// export const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

// export const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();
//   // const [lang, setLang] = useState("uk");

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

//////

// export const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleLoginChange = (evt) => {
//     setValues({
//       ...values,
//       login: evt.target.value,
//     });
//   };

//   const handlePwdChange = (evt) => {
//     setValues({
//       ...values,
//       password: evt.target.value,
//     });
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleLoginChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handlePwdChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

export const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login імʼя</button>
    </form>
  );
};
