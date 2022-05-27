import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <div>
        <h1>Homeieee</h1>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;