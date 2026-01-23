import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/sidebar";
import { HomepageDisplayer } from "./components/SidebarOptions";


function App() {

  
  return (

      <div className="app-container">
        <Sidebar/>
        <div className="inner-component">
          <Header />
          <HomepageDisplayer/>
          
          <Footer />
        </div>
      </div>
  );
}

export default App;