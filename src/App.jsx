import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Body />
        <Banner />
        <Item />
      </div>
      <Footer />
    </>
  );
}

export default App;
