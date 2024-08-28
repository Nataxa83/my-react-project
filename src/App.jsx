// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>

//       {articles.length > 0 && (
//         <ul>
//           {articles.map(({ objectID, url, title }) => (
//             <li key={objectID}>
//               <a href={url} target="_blank" rel="noreferrer noopener">
//                 {title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };
///////

// import { useEffect, useState } from "react";
// import axios from "axios";
// import ArticleList from "./components/ArticleList/ArticleList";
// import { HashLoader } from "react-spinners";

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* Код ефекту */
//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get(
//           "https://hn.algolia.com/api/v1/search?query=react"
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//         setError(true);
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && (
//         <p>
//           <HashLoader />
//         </p>
//       )}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

///////////////

// 1. Імпортуємо HTTP-функцію
// import { fetchArticlesWithTopic } from "./articles-api";

// export function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         // 2. Використовуємо HTTP-функцію
//         const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }

////////
// import { SearchForm } from "./components/ArticleList/SearchForm";
// import { fetchArticlesWithTopic } from "./articles-api";

// // src/components/App.jsx

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// const App = () => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");

//   const filteredPlanets = planets.filter((planet) => planet.includes(query));

//   return (
//     <ul>
//       {filteredPlanets.map((planet) => (
//         <li key={planet}>{planet}</li>
//       ))}
//     </ul>
//   );
// };

// import { useMemo } from "react";

// const App = () => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   // const filteredPlanets = planets.filter((planet) => planet.includes(query));
//   const filteredPlanets = useMemo(
//     () => planets.filter((planet) => planet.includes(query)),
//     [planets, query]
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map((planet) => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
///////////===================

// import { useRef } from "react";

// const App = () => {
//   const btnRef = useRef();

//   return <button ref={btnRef}>Button with ref</button>;
// };

// import { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log("App: ", btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("useEffect: ", btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log("handleClick: ", btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// import { useEffect, useRef } from "react";

// const App = () => {
//   const valueRef = useRef(10);

//   useEffect(() => {
//     // Виконається лише один раз під час монтування.
//     // Наступні оновлення значення рефа не
//     // викличуть оновлення компонента
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value</button>;
// };

/////////==============////////

// import { useRef } from "react";

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// import { forwardRef, useRef, useEffect } from "react";

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// const App = () => {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// };
///////======

// ComponentA.jsx
// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

////=========
// src/components/App.jsx

import { UserMenu } from "./components/UserMenu";

const App = () => {
  return (
    <div>
      <UserMenu />
    </div>
  );
};

export default App;
