import playImg from "../images/play.svg";
import newImg from "../images/new-window.svg";

const Result = (props) => {
  const results = props.result;

  const playAudio = () => {
    const audioUrl = results[0].phonetics.filter((url) => url.audio !== "");
    if (audioUrl[0].audio === undefined) {
      console.log("nope");
    } else {
      new Audio(audioUrl[0].audio).play();
    }
  };

  return (
    <div className="px-5 py-9">
      <div className="result-header flex items-center justify-between">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold">{results[0].word}</h1>
          <p className="text-2xl mt-4 text-fuchsia-500 font-thin">
            {results[0].phonetic}
          </p>
        </div>
        <button className="cursor-pointer">
          <img src={playImg} alt="playbutton" onClick={playAudio} />
        </button>
      </div>
      <div className="noun mt-8">
        <div className="title flex items-center">
          <h1 className="text-2xl font-bold italic mr-7">noun</h1>
          <div className="line border-b-2 border-gray-100 w-full"></div>
        </div>
        <div className="content mt-8">
          <h1 className="text-xl">Meaning</h1>
          <ul className="result-list ml-4 mt-3">
            {results[0].meanings[0].definitions.map((result) => (
              <li key={result.definition} className="mb-4">
                {result.definition}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 mt-8">
            <h1 className="text-xl text-gray-400 font-normal">Synonyms</h1>
            <div className="flex flex-wrap gap-1">
              {results[0].meanings[0].synonyms.map((syn) => (
                <p key={syn.count} className="text-fuchsia-500">
                  {syn + ","}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {results[0].meanings[1] && (
        <div className="verb mt-8">
          <div className="title flex items-center">
            <h1 className="text-2xl font-bold italic mr-7">verb</h1>
            <div className="line border-b-2 border-gray-100 w-full"></div>
          </div>
          <div className="content mt-8">
            <h1 className="text-xl">Meaning</h1>
            <ul className="result-list ml-4 mt-3">
              {results[0].meanings[1].definitions.map((result) => (
                <li key={result.definition} className="mb-4">
                  {result.definition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="line border-b-2 border-gray-100 w-full mt-4"></div>
      <div className="source mt-4">
        <h1 className="text-gray-500 mb-1">Source</h1>
        <a
          className="flex items-center gap-3"
          target="_blank"
          href={results[0].sourceUrls[0]}
        >
          {results[0].sourceUrls[0]}
          <img src={newImg} alt="open" />
        </a>
      </div>
    </div>
  );
};

export default Result;
