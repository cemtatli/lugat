import { ThemeProvider } from "@/context/ThemeContext";

import Header from "./components/Header";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Sidebar />
        <Layout />
      </main>
    </ThemeProvider>
  );
}

export default App;
