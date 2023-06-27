import axios from "axios";
import { useState } from "react";
import searchImg from "../images/search.svg";

const Search = (props) => {
  const [word, setWord] = useState("");

  const getData = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        props.datas(res.data);
        props.run(true);
        setWord("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-5 mt-12 relative">
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="bg-gray-100 w-full px-5 py-4 text-xl rounded-2xl font-bold border-transparent border-2 focus:outline-none focus:border-2 focus:border-fuchsia-500"
        placeholder="Search for any word..."
      />
      <button onClick={getData}>
        <img className="absolute top-6 right-12" src={searchImg} alt="search" />
      </button>
    </div>
  );
};

export default Search;
