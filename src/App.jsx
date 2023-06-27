import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import { useState } from "react";

Header;

function App() {
  const [data, setData] = useState({});
  const [run, setRun] = useState(false);

  const receiveData = (d) => {
    setData(d);
  };

  const receiveRun = (r) => {
    setRun(r);
  };

  return (
    <div className="app-cont max-w-3xl mx-auto">
      <Header />
      <Search datas={receiveData} run={receiveRun} />
      {run && <Result result={data} />}
    </div>
  );
}

export default App;
