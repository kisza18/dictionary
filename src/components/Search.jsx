import searchImg from "../images/search.svg";

const Search = () => {
  return (
    <div className="px-5 mt-12 relative">
      <input
        className="bg-gray-100 w-full px-5 py-4 text-xl rounded-2xl font-bold border-transparent border-2 focus:outline-none focus:border-2 focus:border-fuchsia-500"
        placeholder="Search for any word..."
      />
      <button>
        <img className="absolute top-6 right-12" src={searchImg} alt="search" />
      </button>
    </div>
  );
};

export default Search;
