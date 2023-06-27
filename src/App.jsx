import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import { useState } from "react";

Header;

function App() {
  const [data, setData] = useState({});
  const [run, setRun] = useState(true);

  const receiveData = (d) => {
    setData(d);
  };

  const handleError = (err) => {
    setRun(err);
  };

  return (
    <div className="main-container dark:bg-black">
      <div className="app-cont max-w-3xl mx-auto">
        <Header />
        <Search datas={receiveData} error={handleError} />
        {!run && <Result result={data} />}
      </div>
    </div>
  );
}

export default App;
