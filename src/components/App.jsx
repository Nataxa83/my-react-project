// import Product from "./Product";

// export default function App() {
//     return (
//       <div>
//         <h1>Best selling</h1>

//         <Product
//           name="Tacos With Lime"
//           imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//           price={10.99}
//       />
//         <Product
//           name="Fries and Burger"
//           imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//           price={14.29}
//         />
//       </div>
//     );
//   }
//////////////////

//   // Оголошення
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };

// // Використання
// <Card>
// 	<h1>Card title</h1>
// 	<p>Text between opening and closing tag</p>
// </Card>
////////////////

// src/components/App.jsx

// export const App = () => {
//   return (
//     <p
//       style={{
//         margin: 28,
//         padding: "120px 16px",
//         borderRadius: 40,
//         backgroundColor: "gray",
//         color: "white",
//       }}
//     >
//       Please update your email!
//     </p>
//   );
// };
/////////////

// const alertStyles = {
//   margin: 80,
//   padding: "120px 16px",
//   borderRadius: 40,
//   backgroundColor: "gray",
//   color: "white",
// };

// export const App = () => {
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// };
////////////////////

// import { Alert } from "./Alert";

// export const App = () => {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };
/////////////////

// import { Alert } from "./Alert";
// import { HiUser } from "react-icons/hi";

// export const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         <HiUser size="24" color="green" /> Would you like to browse our
//         recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         {" "}
//         There was an error during your last transaction Max`&apos`s
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
/////////////////////

import ClickCounter from "./Test";

// export const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };
//////////

// import { useState } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       {/* <ClickCounter />
//       <ClickCounter /> */}

//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// export const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   // const updateX = () => {};
//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   // const updateY = () => {};
//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };
///////////////////

// import { useState, useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//////

// import { useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

/////
// export const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };
/////////

// import { useState } from "react";

// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// export const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// import { useEffect } from "react";

// export const App = () => {
//   useEffect(() => {
//     console.log("Effect");

//     return () => {
//       console.log("Clean up");
//     };
//   });

//   return <div>App</div>;
// };

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// export const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };
///////

// import { useState, useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//////

import { useState, useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>

//      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// reset
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log(`Clicks changed - ${clicks}`);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   // const [clicks, setClicks] = useState(0);

//   const [clicks, setClicks] = useState(() => {
//     // Зчитуємо значення за ключем
//     const savedClicks = window.localStorage.getItem("saved-clicks");

//     // Якщо там щось є, повертаємо це
//     // значення як початкове значення стану
//     if (savedClicks !== null) {
//       return savedClicks;
//     }

//     // У протилежному випадку повертаємо
//     // яке-небудь значення за замовчуванням
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;
