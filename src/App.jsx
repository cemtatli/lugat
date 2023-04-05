import { ThemeProvider } from "@/context/ThemeContext";

import Header from "./components/Header";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Tooltip />
        <Categories />
        <Layout />
        <ScrollToTop />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
