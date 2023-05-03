import { ThemeProvider } from "@/context/ThemeContext";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Tooltip from "@/components/Tooltip";
import { Provider } from "react-wrap-balancer";

function App() {
  return (
    <Provider>
      <ThemeProvider>
        <Header />
        <main>
          <Tooltip />
          <Layout />
        </main>
        <ScrollToTop />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
