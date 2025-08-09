import "./home.css" 
import { Navbar } from "../../components/navbars/Navbar";
import Header from "../../components/header/Header";
const Home = () => {
/**
 * Home component serves as the main page
 * that renders the Navbar and Header components.
 * 
 * @returns {JSX.Element} The rendered component
 */
  return (
    <div>
      <Navbar/>
      {/* Render the Navbar component */}
      <Header/>
      {/* Render the Header component */}
    </div>
  )
}
export default Home;
