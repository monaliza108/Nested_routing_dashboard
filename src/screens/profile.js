import { useParams } from "react-router";
import { useLocation } from "react-router";

function Profile() {
  const params = useParams();
  const location =useLocation();
    return (
      <>
        <h1>Profile</h1>
        <h3>Profile name is={params.id}</h3>
        <h3>mail is ={location.pathname}</h3>
      </>
    );
  }
  
  export default Profile;

