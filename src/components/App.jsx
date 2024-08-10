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

import { Alert } from "./Alert";
import { HiUser } from "react-icons/hi";

export const App = () => {
  return (
    <>
      <Alert variant="info">
       <HiUser size="24" color="green"/> Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction Max's
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated> 
        Please update your profile contact information
      </Alert>
      
    </>
  );
};
/////////////////////





