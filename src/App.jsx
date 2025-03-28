import '../src/assets/App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from "./components/RoutesComponent";

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
        <RoutesComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
