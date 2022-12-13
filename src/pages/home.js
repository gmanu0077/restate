import Search from "../components/searchbar";
import Nav from "../components/navbar";
function Home() {
  return (
    <div className="home">
      <Nav />
      <br></br>
      <h1 className="center white-text">Search properties to Rent</h1>
      <Search />
    </div>
  );
}

export default Home;
