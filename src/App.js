import './App.css';
import Badges from './Components/Badges/Badges';
import Landing_page from './Components/Landing_Page/Landing_page';
import Navbar from './Components/Navbar/Navbar';
import Swipper from './Components/Swipper/Swipper';
import Inner from './Pages/About_inner/Inner';


function App() {
  return (
    <div className='app'>
    <Landing_page/>
    <Navbar/>
    <Badges/>
    <Swipper/>
    {/* <Inner/> */}

    </div>
  );
}

export default App;
