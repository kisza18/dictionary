import axios from "axios";
import { useState } from "react";
import searchImg from "../images/search.svg";

const Search = (props) => {
  const [word, setWord] = useState("");
  const [isExists, setIsExists] = useState(true);

  const getData = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setIsExists(true);
        props.datas(res.data);
        setWord("");
        props.error(false);
      })
      .catch((error) => {
        setIsExists(false);
        props.error(true);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  return (
    <div className="px-5 mt-12 relative">
      <input
        value={word}
        onKeyDown={handleKeyPress}
        onChange={(e) => setWord(e.target.value)}
        className="bg-gray-100 dark:bg-neutral-800 dark:text-white w-full px-5 py-4 text-xl rounded-2xl font-bold border-transparent border-2 focus:outline-none focus:border-2 focus:border-fuchsia-500"
        placeholder="Search for any word..."
      />
      <button onClick={getData}>
        <img className="absolute top-6 right-12" src={searchImg} alt="search" />
      </button>
      {!isExists && (
        <div className="text-center">
          <h1 className="text-lg dark:text-white font-bold mt-10">
            No Definitions Found
          </h1>
          <p className="dark:text-white mt-5">
            Sorry pal, we couldn't find definitions for the word you were
            looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
