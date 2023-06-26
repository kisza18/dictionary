import Header from "./components/Header";
import Search from "./components/Search";

Header;

function App() {
  return (
    <div className="app-cont max-w-3xl mx-auto">
      <Header />
      <Search />
    </div>
  );
}

export default App;
