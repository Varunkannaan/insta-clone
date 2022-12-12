import Navbar from "./components/navbar";
import Posts from "./components/posts";
import Profile from "./components/profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <Posts/>
    </>
  );
}

export default App;
