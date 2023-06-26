import playImg from "../images/play.svg";
import newImg from "../images/new-window.svg";

const Result = () => {
  return (
    <div className="px-5 py-9">
      <div className="result-header flex items-center justify-between">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold">keyboard</h1>
          <p className="text-2xl mt-4 text-fuchsia-500 font-thin">/ˈkiːbɔːd/</p>
        </div>
        <img src={playImg} alt="playbutton" />
      </div>
      <div className="noun mt-8">
        <div className="title flex items-center">
          <h1 className="text-2xl font-bold italic mr-7">noun</h1>
          <div className="line border-b-2 border-gray-100 w-full"></div>
        </div>
        <div className="content mt-8">
          <h1 className="text-xl">Meaning</h1>
          <ul className="ml-4 mt-3">
            <li className="mb-4">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className="mb-4">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
          <div className="flex items-center gap-5 mt-8">
            <h1 className="text-xl text-gray-400 font-normal">Synonyms</h1>
            <p className="text-fuchsia-500">electronic keyboard</p>
          </div>
        </div>
      </div>
      <div className="verb mt-8">
        <div className="title flex items-center">
          <h1 className="text-2xl font-bold italic mr-7">verb</h1>
          <div className="line border-b-2 border-gray-100 w-full"></div>
        </div>
        <div className="content mt-8">
          <h1 className="text-xl">Meaning</h1>
          <ul className="ml-4 mt-3">
            <li className="mb-4">To type on a computer keyboard.</li>
          </ul>
          <h1 className="text-gray-400 font-normal text-lg ml-4">
            Keyboarding is the part of this job I hate the most.
          </h1>
        </div>
      </div>
      <div className="line border-b-2 border-gray-100 w-full mt-4"></div>
      <div className="source mt-4">
        <h1 className="text-gray-500 mb-1">Source</h1>
        <a className="flex items-center gap-3" href="/">
          https://en.wiktionary.org/wiki/keyboard{" "}
          <img src={newImg} alt="open" />
        </a>
      </div>
    </div>
  );
};

export default Result;
