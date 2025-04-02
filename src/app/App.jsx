import './App.scss';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RoutesComponent from "../components/RoutesComponent";

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
