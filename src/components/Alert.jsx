// const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     backgroundColor: "gray",
//     color: "white",
  
// };
  
  
// export const Alert = ({ children }) => {
//     return <p style={alertStyles}>{children}</p>;
  
// };
/////////////

// src/components/Alert.jsx

// const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     color: "white",
//   };
//
// const getBgColor = variant => {
//     switch (variant) {
//         case "info":
//             return "blue";
//       case "success":
//         return "green";
//       case "error":
//           return "red";
//       case "warning":
//         return "orange";
//       default:
//         throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
// };

// export const Alert = ({ variant, children }) => {
//     return (
//         <p
//         style={{
//             ...alertStyles,
//             backgroundColor: getBgColor(variant),
//         }}
//         >
//         {children}
//       </p>
//     );
// };
/////////////////

// import "./Alert.css"
//
// export const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };
//////////////

// import "./Alert.css";

// export const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
///////////////

// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   if (outlined) {
// 		classNames.push("is-outlined");
// 	}

//   if (elevated) {
// 		classNames.push("is-elevated");
// 	}

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
//=============================

// src/components/Alert.jsx

// import clsx from "clsx";
// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };
// /////////////////

// // src/components/Alert.jsx

// import clsx from "clsx";
// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };
/////////////////////

// // src/components/Alert.jsx

// // Синтаксис імпорту CSS-модуля
// import css from "./Alert.module.css";

// // Отримуємо об'єкт відповідності імен класів
// console.log(css); // { alert: "Alert_alert_ax7yz" }

// export const Alert = ({ children }) => {
//   // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//   return <p className={css.alert}>{children}</p>;
// };
/////////////////

// src/components/Alert.jsx

import clsx from "clsx";
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
return (
 <p
    className={clsx(
        css[variant],
    outlined && css.isOutlined,
    elevated && css.isElevated
    )}
 >
    {children}
 </p>
 );
};



