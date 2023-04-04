import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex">
        <Sidebar />
        <Layout />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
