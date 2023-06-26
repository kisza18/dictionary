import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

Header;

function App() {
  return (
    <div className="app-cont max-w-3xl mx-auto">
      <Header />
      <Search />
      <Result />
    </div>
  );
}

export default App;
