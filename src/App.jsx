import Header from "./components/header/Header";
import Shorten from "./components/shorten/Shorten";
import Statistics from "./components/statistics/Statistics";
import Boost from "./components/boost/Boost";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Shorten />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
