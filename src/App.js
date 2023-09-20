import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
