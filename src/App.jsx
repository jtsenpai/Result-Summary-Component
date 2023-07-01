import Result from "./components/Result";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="container">
        <Result />
        <Summary />
      </div>
      <Footer />
    </main>
  );
}

export default App;
