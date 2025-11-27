
import { Link } from "react-router";
 
const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>Lien vers <Link to={"/Editor"}>Editor</Link></li>
         <li>Lien vers Editor meme id 4</li>
         <li>Lien vers <Link to={"/thumbnail"}>thumbnail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
