import Navbar from "./Components/Layouts/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./Components/Layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import {GithubProvider} from "./Context/github/GithubContext"
import { AlertProvider } from "./Context/Alert/AlertContext";
import Alert from "./Components/Layouts/Alert";
import User from "./Pages/User";

function App() {
  return (<GithubProvider>
    <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="mx-auto container px-3 pb-12">
        <Alert />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/notFound' element={<NotFound />}/>
            <Route path='/user/:login' element={<User />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    
      
      </Router>
    </AlertProvider>
  </GithubProvider>
    
  );
}

export default App;
