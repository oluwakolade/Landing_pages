import Extension from "./components/Extension";
import Features from "./components/Features";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="body">
        <Header />
        <Features />
        <Extension />
        <Questions />
      </main>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
