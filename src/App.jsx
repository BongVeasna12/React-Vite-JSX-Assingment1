import './App.css'
import MainPage from './component/Layout/MainPage/MainPage';
import NavbarPage from './component/Layout/Page/NavbarPage';
import FooterPage from './component/Layout/Page/FooterPage';
import RatingCard from './component/Layout/MainPage/RatingCard';
import TableProduct from './component/Layout/MainPage/TableProduct';

function App() {
   
  return (
    <>
      <div>
        <NavbarPage/>
        <MainPage/>
        <RatingCard/>
        <TableProduct/>
        <FooterPage/>
      </div>
    </>
  );  
};
export default App;