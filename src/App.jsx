import { ThemeProvider } from "@/context/ThemeContext";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Tooltip from "@/components/Tooltip";

function App() {
  return (
    <ThemeProvider>
      <Tooltip />
      <Header />
      <main>
        <Layout />
      </main>
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
