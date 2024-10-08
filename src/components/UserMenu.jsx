// src/components/UserMenu.jsx

// import { useUser } from "../useContext";

// export const UserMenu = () => {
//   const { username } = useUser();

//   return (
//     <div>
//       <p>Welcome, {username}!</p>
//       <button>Log out</button>
//     </div>
//   );
// };

// src/components/UserMenu.jsx

import { useUser } from "./userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
