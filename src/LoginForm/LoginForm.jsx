// export const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };
//////////

// export const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
//////

// export const LoginForm = ({ onLogin }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

////////////////////

// import { useId } from "react";

// const MyComponent = () => {
//   const id = useId();
// };
/////////////////
import { useId } from "react";

export const MyComponent = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Text field label</label>
      <input type="text" id={id} />
    </div>
  );
};

export const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};
