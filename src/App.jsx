import { ThemeProvider } from "@/context/ThemeContext";

import Header from "./components/Header";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Sidebar />
        <Layout />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
}

export default App;
